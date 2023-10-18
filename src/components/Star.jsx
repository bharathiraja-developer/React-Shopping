import React from "react";

function Star({ rating }) {
  if (rating == 5) {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
      </div>
    );
  } else if (rating == 4) {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
      </div>
    );
  } else if (rating == 3) {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
      </div>
    );
  } else if (rating == 2) {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
      </div>
    );
  }
}

export default Star;
