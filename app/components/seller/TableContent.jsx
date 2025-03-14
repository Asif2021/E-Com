"use client";

import React, { useState } from "react";
// import Link from "next/link";
import { useActionState } from "react";
import { createProduct, editProduct } from "@/actions/productController";
import { CldUploadWidget } from "next-cloudinary";

function TableContent(props) {
  const [signature, setSignature] = useState("");
  const [public_id, setPublic_id] = useState("");
  const [version, setVersion] = useState("");

  let actualAction;

  if (props.action == "create") {
    actualAction = createProduct;
  }
  if (props.action == "edit") {
    actualAction = editProduct;
  }

   const [formState, formAction] = useActionState(actualAction, {});

  const categories = ["Electronics", "Cameras", "Laptops", "Accessories"];
  return (
    <form action={formAction}>
      <div className="mb-4">
        <label className="block mb-1"> Name </label>
        <input
          type="text"
          className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
          placeholder="Product name"
          name="name"
          defaultValue={props.product?.name}
          required
        />
        {formState.errors?.name && (
          <span className="text-red-600">{formState.errors?.name}</span>
        )}
      </div>

      <div className="mb-4 mt-5">
        <label className="block mb-1"> Description </label>
        <textarea
          // @ts-ignore
          rows="4"
          className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
          placeholder="Product description"
          name="description"
          defaultValue={props.product?.description}
          required
        ></textarea>
        {formState.errors?.description && (
          <span className="text-red-600">{formState.errors?.description}</span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-x-2 mt-5">
        <div className="mb-4">
          <label className="block mb-1"> Price </label>
          <div className="relative">
            <div className="col-span-2">
              <input
                type="text"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="0.00"
                name="price"
                defaultValue={props.product?.price}
                required
              />
            </div>
            {formState.errors?.price && (
              <span className="text-red-600">{formState.errors?.price}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Category </label>
          <div className="relative">
            <select
              className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="category"
              required
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
              <svg
                width="22"
                height="22"
                className="fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
            </i>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-2 mt-5">
        <div className="mb-4">
          <label className="block mb-1"> Seller / Brand </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Seller or brand"
            name="seller"
            defaultValue={props.product?.seller}
            required
          />
          {formState.errors?.seller && (
            <span className="text-red-600">{formState.errors?.seller}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Stock </label>
          <div className="relative">
            <div className="col-span-2">
              <input
                type="text"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="0"
                name="stock"
                defaultValue={props.product?.stock}
                required
              />
            </div>
            {formState.errors?.stock && (
              <span className="text-red-600">{formState.errors?.stock}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <input
          type="hidden"
          name="productId"
          defaultValue={props.product?._id.toString()}
        />

        {/* <Link className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-400 border border-transparent rounded-md hover:bg-blue-500 w-full md:w-1/2"
     href="/sellerPage/products/create/uploadImage">Upload Image</Link> */}
        <div>
          <div className="mb-4 flex flex-col md:flex-row">
            <CldUploadWidget
              onSuccess={(result, { widget }) => {
                setSignature(result?.info.signature);
                setPublic_id(result?.info.public_id);
                setVersion(result?.info.version);
              }}
              signatureEndpoint="/widget-signature"
            >
              {({ open }) => {
                 function handleOpen(e){
                  e.preventDefault();
                  open();
                }
                return (
                  <button
                    className="btn btn-primary border border-gray-700 p-1 rounded"
                    onClick={handleOpen}
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          {/* hidden inputs for cloudinary */}
          <input type="hidden" name="public_id" value={public_id} />
          <input type="hidden" name="version" value={version} />
          <input type="hidden" name="signature" value={signature} />
        </div>
        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full md:w-1/2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default TableContent;
