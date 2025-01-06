import Footer from "./components/Footer";
import ProductGrid from "./components/customer/ProductGrid";
import Header from "./components/Header";
import { Suspense } from 'react';
import { CardsSkeleton } from './components/customer/Skeletons';


export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
 
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <div className="flex justify-center items-center py-8">
        <Suspense fallback={<CardsSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
    </main>
    <Footer />
  </div>
 </>
  );
}
