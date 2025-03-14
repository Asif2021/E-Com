'use client'
import { useState } from "react"
import React from "react"
import { CldUploadWidget } from "next-cloudinary"

const page = () => {
  const [signature, setSignature] = useState("")
  const [public_id, setPublic_id] = useState("")
  const [version, setVersion] = useState("")
  return (
    <div>
       <main className="md:w-2/3 lg:w-3/4 px-4">
            <div
              style={{ maxWidth: "480px" }}
              className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
            >
              <div>
                <h2 className="mb-3 text-2xl font-semibold">
                  Upload Product Images
                </h2>

                <div className="mb-4 flex flex-col md:flex-row">
                  
                  <CldUploadWidget
                  onSuccess={(result, {widget})=>{
                    console.log(result?.info)
                    setSignature(result?.info.signature)
                    setPublic_id(result?.info.public_id)
                    setVersion(result?.info.version)
                  }}
                  signatureEndpoint="/widget-signature">
                    {({ open }) => {
                      return (
                      <button className="btn btn-primary border border-gray-700 p-1 rounded" onClick={() => open()}>
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

                {/* <div className="grid grid-cols-6 gap-2 my-5">
                  <img
                    src={"/logo192.png"}
                    alt="Preview"
                    className="col-span-1 object-contain shadow rounded border-2 border-gray p-2 h-full w-full"
                    width="50"
                    height="50"
                  />
                </div> */}

                <button
                  type="submit"
                  className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </main>
    </div>
  )
}
export default page