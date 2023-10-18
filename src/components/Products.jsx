import React, { useState } from "react";
import Star from "./Star";
import Button from "./Button";

function Products({
  mobileName,
  mrpPrice,
  salePrice,
  starRating,
  src,
  handleValue,
  cartValue,
}) {
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
        <Button cart={cartValue} setCart={handleValue} />
      </div>
    </div>
  );
}

export default Products;
