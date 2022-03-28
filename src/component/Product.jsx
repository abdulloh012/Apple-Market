import React from "react";
import { DATA } from "../Data";
import { NavLink } from "react-router-dom";

function Product() {
  const cardItem = (item) => {
    return (
      <div className="card mb-5 py-2" key={item.id} >
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/product/${item.id}`} className="btn btn-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-1">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
}

export default Product;
