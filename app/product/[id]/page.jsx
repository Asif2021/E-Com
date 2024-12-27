import { ProductData } from '../../components/ProductData';
import Image from 'next/image';

export async function generateStaticParams() {
  
  return ProductData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  // Await the entire params object first
  const { id } = await params;
  const product = ProductData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image 
            src={product.image} 
            alt={product.title} 
            width={500} 
            height={500} 
            className="w-full h-auto" 
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold mt-2">{product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

