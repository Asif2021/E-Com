import React from "react";
import Link from "next/link";
import { ObjectId } from "mongodb";
import { Search, CirclePlus, Pencil, Trash2 } from "lucide-react";
import { getCollection } from "@/lib/db";
import Tooltip from "../Tooltip";
import { deleteProduct } from "@/actions/productController";
import Table from "./Table";

async function getProduct(id) {
  const collection = await getCollection("product");
  const results = await collection
    .find({ author: ObjectId.createFromHexString(id) })
    .sort({ _id: -1 })
    .toArray();

  // Convert MongoDB objects to plain objects
  return results.map((product) => ({
    ...product,
    _id: product._id.toString(), // Convert ObjectId to string
    author: product.author.toString(), // Convert author ObjectId to string
    // Handle other fields if needed (e.g., Buffer to string or base64)
  }));
}

const ProductTable = async (props) => {
  const product = await getProduct(props.user.userId);
 
  return (
    <>
      {product?.length === 0 ? (
        <>
          <div>
            You have not uploaded any product yet.. <strong>Upload Now</strong>
          </div>
          <Link
            href="/sellerPage/products/create"
            className="flex justify-center border text-white bg-blue-700 hover:bg-blue-500 p-2 rounded-md w-full md:w-40"
          >
            Create Product <CirclePlus className="ml-2" />
          </Link>
        </>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h1 className="text-3xl my-2 ml-4 font-bold">
            {product.length} Products
          </h1>
          <div className="relative flex mx-2 gap-1 flex-col md:flex-row">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block flex-1 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <Link
              href="/sellerPage/products/create"
              className="flex border text-white bg-blue-700 hover:bg-blue-500 items-center p-2 rounded-md"
            >
              Create Product <CirclePlus />
            </Link>
          </div>
          <Table product={product} />
        </div>
      )}
    </>
  );
};

export default ProductTable;