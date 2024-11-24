'use client'
import ProductCard from "../components/ProductCard";

const ProductData = [
  {
    id: 1,
    title: "Sport Shoes for Men",
    image: "/shoes/1.jpg",
    description:'Lorem ipsum ajkdas adskfjakl dsaklfaskl;f ds',
    price: "$66",
  },
  {
    id: 2,
    title: "New High Quality Shoes for Men",
    image: "/shoes/2.jpg",
    description:'Lorem ipsum ajkdas adskfjakl la;kdsfj al;sjf la;sjfklafddas',
    price: "$66",
  },
  {
    id: 3,
    title: "Exercise Shoes for Men",
    image: "/shoes/3.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  },
  {
    id: 4,
    title: "Best Shoes",
    image: "/shoes/4.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  },
  {
    id: 5,
    title: "Quality Shoes",
    image: "/shoes/5.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  },
  {
    id: 6,
    title: "Gray Shoes",
    image: "/shoes/6.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  },
  {
    id: 7,
    title: "Casual Wearing Shoes",
    image: "/shoes/7.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  },
  {
    id: 8,
    title: "Latest Trandy Shoes",
    image: "/shoes/8.jpg",
    description:'Lorem ipsum ajkdas adskfjakl',
    price: "$66",
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {ProductData.map((data) => {
      return (
          <ProductCard
            key={data.id}
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
