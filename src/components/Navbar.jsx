import React, { useEffect, useState } from "react";

function Navbar({ cart }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Mobile Store
        </a>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cart}
            </span>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
