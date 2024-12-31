import { ProductData } from '../../components/ProductData';
import ProductDetails from '../../components/ProductDetails'

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
    <ProductDetails  product ={product}/>
  );
}

