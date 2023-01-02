import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../helpers/FormatPrice";


 const OneProduct = (curElem) => {
    const {id, name, image, price, category} = curElem;


  return (
    <div className="single-product">
     <NavLink to={`/SingleProduct/${id}`}>
      <img className="img-fluid" src={image} alt={name} />
      </NavLink>
      <div className="product-details">
        <h6>{name}</h6>
        <div className="price">
          <h6>{<FormatPrice price={price} />} </h6>
          <h6 className="l-through">{category}</h6>
        </div>
        <div className="prd-bottom">
          <a href="javascriptvoid(0)" className="social-info">
            <span className="ti-bag"></span>
            <p className="hover-text">add to bag</p>
          </a>
          <a href="javascriptvoid(0)" className="social-info">
            <span className="lnr lnr-heart"></span>
            <p className="hover-text">Wishlist</p>
          </a>
          <a href="javascriptvoid(0)" className="social-info">
            <span className="lnr lnr-sync"></span>
            <p className="hover-text">compare</p>
          </a>
          <a href="javascriptvoid(0)" className="social-info">
            <span className="lnr lnr-move"></span>
            <p className="hover-text">view more</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export{ OneProduct} ;
