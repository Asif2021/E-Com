import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import Footer from "./components/Footer";
import ProductCard from './components/ProductCard'

export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
    <div>
      <Header />
      <ProductCard/>
      <Footer />
    </div>
  );
}
