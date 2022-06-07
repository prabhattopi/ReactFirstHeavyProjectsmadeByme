import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
