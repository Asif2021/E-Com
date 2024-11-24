import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from './components/ProductGrid'

export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="mr-auto ml-auto">
      <ProductGrid/>
      </div>
      <Footer />
    </>
  );
}
