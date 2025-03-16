// @ts-nocheck

import { getCollection } from "@/lib/db"
import { ObjectId } from "mongodb"
import { getUserFromCookie } from "@/lib/getUser"
import { redirect } from "next/navigation"
import TableContent from "@/app/components/seller/TableContent"
import React from "react"


async function getDoc(id){
const productCollection = await getCollection("product")
const result = await productCollection.findOne({_id:ObjectId.createFromHexString(id)})
return JSON.parse(JSON.stringify(result)) //convert the MongoDB document into a plain JavaScript object
}

async function page({params }) {
 // Properly await and access the id parameter
 const { id } = await params;
  const doc = await getDoc(id);
const user = await getUserFromCookie();
 if (!doc || user.userId !== doc.author) {
    redirect("/")
  }



  return (
    <div>
        <h2 className="text-center text-4xl text-gray-600 mb-5 font-bold">Edit Post</h2>
        <TableContent product={doc} action="edit"/>
    </div>
  )
}
export default page