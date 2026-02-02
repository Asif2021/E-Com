'use client'

import ProductCard from "./ProductCard";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <ProductCard
              key={product._id ?? product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
