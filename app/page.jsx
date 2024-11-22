import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import Footer from "./components/Footer";
import ProductCard from './components/ProductCard'


export default function Home() {
  return (
    <div>
      <Header />
      {/* <SideNav /> */}
      <ProductCard/>
      <Footer />
    </div>
  );
}
