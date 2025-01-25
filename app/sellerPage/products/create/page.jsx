
import { getUserFromCookie } from "../../../../lib/getUser";
import { redirect } from "next/navigation";
import TableContent from '../../../components/seller/TableContent'
import React from "react";

async function page () {
  
  const user = await getUserFromCookie();
  if (!user) {
    return redirect("/");}
 
  return (
          <main className="w-full">
            <section className="container max-w-3xl mx-auto">
              <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black">
                Create New Product
              </h1>
            <TableContent action="create"/>
            </section>
          </main>
  )
}
export default page