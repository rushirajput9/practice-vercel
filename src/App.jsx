import React, { useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Food from "./components/food/Food";
import "./App.css";
import CartDetails from "./components/cartdetails/CartDetails";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const foodRef = useRef(null);

  const handleCartClick = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  
  const scrollToFood = () => {
    if (foodRef.current) {
      foodRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onCartClick={handleCartClick} />
      {cartVisible && <CartDetails closeCart={closeCart} />}
      <HeroSection onOrderClick={scrollToFood} />
      <div ref={foodRef} />
      <Food  />
    </div>
  );
}

export default App;
