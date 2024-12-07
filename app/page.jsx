import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import { Suspense } from 'react';
import { CardsSkeleton } from '../components/Skeletons';


export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <Header />
      </div>
      <div className="flex justify-center items-center">
        <Suspense fallback={<CardsSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
