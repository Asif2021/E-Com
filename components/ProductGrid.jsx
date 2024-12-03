'use client'

import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((data) => {
      return (
          <ProductCard
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
            price={data.price}
          />
        );
      })}
    </div>
  );
};
export default ProductGrid;
