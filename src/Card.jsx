import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, description }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <NavLink to="/payment" className="btn btn-primary">
              Purchase
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
