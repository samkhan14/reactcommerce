import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../helpers/FormatPrice";

const OneProductListView = (curElem) => {
  const { id, name, image, price, category, description } = curElem;

  return (
    <div className="single-product">
      <div class="row">
        <div class="col-lg-4">
          <NavLink to={`/SingleProduct/${id}`}>
            <img className="img-fluid" src={image} alt={name} />
          </NavLink>
        </div>
        <div class="col-lg-8">
          <div className="product-details">
            <h2>{name}</h2>
            <div className="price">
              <h6>{<FormatPrice price={price} />} </h6>
              <h6 className="l-through">{category}</h6>
            </div>
            <p>{description.slice(0, 90)}...</p>
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
      </div>
    </div>
  );
};

export { OneProductListView };
