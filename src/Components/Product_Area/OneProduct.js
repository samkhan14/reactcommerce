import React from "react";
import { NavLink } from "react-router-dom";


 const OneProduct = (curElem) => {
    const {id, name, image, price, category} = curElem;


  return (
    <div class="single-product">
     <NavLink to={`/SingleProduct/${id}`}>
      <img class="img-fluid" src={image} alt={name} />
      </NavLink>
      <div class="product-details">
        <h6>{name}</h6>
        <div class="price">
          <h6>{price}</h6>
          <h6 class="l-through">{category}</h6>
        </div>
        <div class="prd-bottom">
          <a href="javascriptvoid(0)" class="social-info">
            <span class="ti-bag"></span>
            <p class="hover-text">add to bag</p>
          </a>
          <a href="javascriptvoid(0)" class="social-info">
            <span class="lnr lnr-heart"></span>
            <p class="hover-text">Wishlist</p>
          </a>
          <a href="javascriptvoid(0)" class="social-info">
            <span class="lnr lnr-sync"></span>
            <p class="hover-text">compare</p>
          </a>
          <a href="javascriptvoid(0)" class="social-info">
            <span class="lnr lnr-move"></span>
            <p class="hover-text">view more</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export{ OneProduct} ;
