"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Tooltip from "../Tooltip";
import { deleteProduct } from "@/actions/productController";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

function Table(props) {
  
  return (
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
   
      {props.product?.map((product, index) => {
       
       return (
        <tbody key={product._id}>
<tr className="bg-white border-b hover:bg-gray-100">
<td className="px-6 py-2">
  {product?.photo ? (
    <CldImage
      priority // This gives the image loading priority
      width="60"
      height="60"
      style={{ width: 'auto', height: 'auto' }}
      src={product.photo}
      sizes="80vw"
      alt="image"
    />
  ) : (
    <div>No image available</div>
  )}
</td>
<td className="px-6 py-2">{product?.name}</td>
<td className="px-6 py-2">{product?.description}</td>
<td className="px-6 py-2">{product?.price}</td>
<td className="px-6 py-2">{product?.stock}</td>
<td className="px-6 py-4">
<div className="flex items-center justify-around">
  <Link
    href={`/sellerPage/products/edit-product/${product._id.toString()}`}
    className="border border-solid p-2 rounded-md hover:bg-gray-400">
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
</div>
</td>
</tr>
</tbody>
       )
      })}
    
  </table>
  );
}
export default Table;
