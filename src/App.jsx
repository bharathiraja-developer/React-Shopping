import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState(0);
  const handleValue = (value) => {
    setCart(value);
  };
  return (
    <div>
      <Navbar cart={cart} />
      <Header />
      <AllProducts handleValue={handleValue} cartValue={cart} />
      <Footer />
    </div>
  );
}

export default App;
