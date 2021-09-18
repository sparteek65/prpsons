import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import ProductCard from "./components/ProductCard/ProductCard";
import Brand from "./screens/Brand/Brand";
import Homepage from "./screens/Home/Homepage";
import Product from "./screens/Product/Product";
function App() {
  
  return (
    <div>
      <Header />
    

    {/* <Homepage/> */}
    <Product/>
    {/* <Brand/> */}
    

      <Footer/>
    </div>
  );
}

export default App;
