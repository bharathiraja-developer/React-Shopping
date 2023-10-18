import React from "react";
import Products from "./Products";

function AllProducts({ handleValue, cartValue }) {
  let mobiles = [
    {
      id: "1",
      mobileName: "iPhone 13",
      mrpPrice: "59,999",
      salePrice: "50,999",
      starRating: 5,
      src: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    },
    {
      id: "2",
      mobileName: "iPhone 14",
      mrpPrice: "79,999",
      salePrice: "61,999",
      starRating: 5,
      src: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    },
    {
      id: "3",
      mobileName: "Samsung Galaxy S23 FE 5G",
      mrpPrice: "79,999",
      salePrice: "59,999",
      starRating: 4,
      src: "https://m.media-amazon.com/images/I/71Ii1syiYrL._SX679_.jpg",
    },
    {
      id: "4",
      mobileName: "OnePlus Nord 3 5G",
      mrpPrice: "33,999",
      salePrice: "29,999",
      starRating: 4,
      src: "https://m.media-amazon.com/images/I/6116+vSW+1L._SX569_.jpg",
    },
    {
      id: "5",
      mobileName: "iQOO Neo 7 Pro 5G",
      mrpPrice: "31,999",
      salePrice: "28,999",
      starRating: 3,
      src: "https://m.media-amazon.com/images/I/712pLRfzDYL._SX679_.jpg",
    },
    {
      id: "6",
      mobileName: "OnePlus 10R 5G",
      mrpPrice: "27,999",
      salePrice: "24,999",
      starRating: 4,
      src: "https://m.media-amazon.com/images/I/716uVx3Wr5L._SX679_.jpg",
    },
    {
      id: "7",
      mobileName: "Samsung Galaxy Z Flip5 5G",
      mrpPrice: "1,02,999",
      salePrice: "99,999",
      starRating: 5,
      src: "https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg",
    },
    {
      id: "8",
      mobileName: "Motorola razr 40 Ultra",
      mrpPrice: "1,19,999",
      salePrice: "89,999",
      starRating: 4,
      src: "https://m.media-amazon.com/images/I/617D7U0bJ-L._SX679_.jpg",
    },
  ];
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {mobiles.map((mobile) => (
            <Products
              key={mobile.id}
              mobileName={mobile.mobileName}
              mrpPrice={mobile.mrpPrice}
              salePrice={mobile.salePrice}
              starRating={mobile.starRating}
              src={mobile.src}
              handleValue={handleValue}
              cartValue={cartValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
