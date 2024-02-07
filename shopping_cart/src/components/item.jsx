import { React, useState } from "react";

function Item({ props, updateCart }) {
  const [isAddEnabled, setIsAddEnabled] = useState(true);
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={props.imageUrl} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{props.name}</h5>
              {/* <!-- Product price--> */}
              {props.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}

          {isAddEnabled ? (
            <>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                    className="btn  btn-primary mt-auto"
                    onClick={(event) => {
                      setIsAddEnabled(!isAddEnabled), updateCart(1);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                    className="btn  btn-danger mt-auto"
                    onClick={(event) => {
                      setIsAddEnabled(!isAddEnabled), updateCart(-1);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Item;
