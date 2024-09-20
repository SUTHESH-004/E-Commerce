import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
