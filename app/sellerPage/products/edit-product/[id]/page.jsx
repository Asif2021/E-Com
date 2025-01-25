// @ts-nocheck

import { getCollection } from "@/lib/db"
import { ObjectId } from "mongodb"
import { getUserFromCookie } from "@/lib/getUser"
import { redirect } from "next/navigation"
import TableContent from "@/app/components/seller/TableContent"
import React from "react"


async function getDoc(id){
const haikusCollection = await getCollection("product")
const result = await haikusCollection.findOne({_id:ObjectId.createFromHexString(id)})
return result
}

async function page(props) {
const doc = await getDoc(props.params.id)
const user = await getUserFromCookie()
if(user.userId !== doc.author.toString()){
  return redirect("/")
}


  return (
    <div>
        <h2 className="text-center text-4xl text-gray-600 mb-5 font-bold">Edit Post</h2>
        <TableContent product={doc} action="edit"/>
    </div>
  )
}
export default page