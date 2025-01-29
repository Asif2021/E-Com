import Link from "next/link";
import { ObjectId } from "mongodb";
import { Search, CirclePlus, Pencil, Trash2 } from "lucide-react";
import { getCollection } from "@/lib/db";
import Tooltip from "../Tooltip";
import { deleteProduct } from "@/actions/productController";
import React from "react";

async function getProduct(id) {
  const collection = await getCollection("product");
  const results = await collection
    .find({ author: ObjectId.createFromHexString(id) })
    .sort({ _id: -1 })
    .toArray();
  return results;
}

const ProductTable = async (props) => {
  const product = await getProduct(props.user.userId);

  return (
    <>
      {product?.length == 0 ? (<>
        <div>You have not uploaded any product yet.. <strong> Upload Now</strong> </div>
        <Link
              href="/sellerPage/products/create"
              className="flex justify-center border text-white bg-blue-700 hover:bg-blue-500  p-2 rounded-md w-full md:w-40"
            >
              Create Product <CirclePlus className="ml-2" />
            </Link></>
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
          <table className="w-full text-sm text-left table-fixed">
            <thead className="text-l text-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product?.map((product) => {
               return (
                  <tr
                    className="bg-white border-b hover:bg-gray-100"
                    key={product._id}>
                    <td className="px-6 py-2">Image of product</td>
                    <td className="px-6 py-2">{product?.name}</td>
                    <td className="px-6 py-2">{product?.description}</td>
                    <td className="px-6 py-2">{product?.price}</td>
                    <td className="px-6 py-2">{product?.stock}</td>
                    <td className="px-6 py-4 flex justify-items-center justify-around">
                      <Link href={`/sellerPage/products/edit-product/${product._id.toString()}`} className="border border-solid p-2 rounded-md hover:bg-gray-400">
                        <Tooltip text="Edit">
                          <Pencil width={15} />
                        </Tooltip>
                      </Link>

                        {/* Delete Product */}
                      <form action={deleteProduct}>
                        <input
                          type="hidden"
                          name="id"
                          defaultValue={product._id.toString()}
                        />
                        <button className="border border-solid p-2 rounded-md hover:bg-red-500 text-red-500 hover:text-white">
                          <Tooltip text="Delete">
                            <Trash2 width={17} />
                          </Tooltip>
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default ProductTable;
