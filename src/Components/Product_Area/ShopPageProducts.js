import React from "react";
import { useFilterContext } from "../../contexts/Filter_context";
import { OneProduct } from "./OneProduct";
import { OneProductListView } from "./OneProductListView";

export const ShopPageProducts = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return (
      <div className="row">
        {/* single product  */}
        {filter_products.map((curElem) => {
          return (
            <div className="col-lg-4 col-md-6">
              <OneProduct key={curElem.id} {...curElem} />
            </div>
          );
        })}
      </div>
    );
  }

  if (grid_view === false) {
    return (
      <div className="productsByListView"> 
      <div className="row">
        {filter_products.map((curElem) => {
          return (
            <div className="col-lg-12 ">
              <OneProductListView key={curElem.id}{...curElem} />
            </div>
          )
        })
        }
      </div>
      </div>
    )
  }  
};
