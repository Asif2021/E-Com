import { getUserFromCookie } from "../../../lib/getUser";
import ProductTable from '../../components/seller/ProductTable'
import React from "react";


 const Products = async () => {
  const user = await getUserFromCookie();

  return (
    <>
    {user &&  <ProductTable user={user}/> }
    </>
         )
};

export default Products;
