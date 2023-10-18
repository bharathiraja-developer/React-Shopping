import React, { useState } from "react";
import Navbar from "./Navbar";

function Button({ cart, setCart }) {
  const [state, setState] = useState(true);
  const increment = () => {
    setCart(cart + 1);
    setState(false);
  };
  const decrement = () => {
    setCart(cart - 1);
    setState(true);
  };
  if (state) {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a
            onClick={increment}
            className="btn btn-outline-dark mt-auto"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a
            onClick={decrement}
            className="btn btn-outline-dark mt-auto"
            href="#"
          >
            Remove from cart
          </a>
        </div>
      </div>
    );
  }
}

export default Button;
