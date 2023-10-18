import React from "react";
import Star from "./Star";

function Products({ mobileName, mrpPrice, salePrice, starRating, src }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={src} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{mobileName}</h5>
            <Star rating={starRating} />
            <span className="text-muted text-decoration-line-through">
              ₹{mrpPrice}
            </span>
            ₹{salePrice}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
