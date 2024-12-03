import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";

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
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
