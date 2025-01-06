'use client'

import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Loading from './Loading'

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    setLoading(false)

    };

    fetchProducts();
  }, []);

  return (
    <>
    {loading ? (<div className="flex justify-center justify-items-center h-screen"> <Loading/> </div>) :
    (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      { products.map((product) => {
      return (
          <ProductCard
            key={product?.id}
            product={product}/>)})}
    </div>)}
    </>
  );
};
export default ProductGrid;
