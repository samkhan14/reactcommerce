import React from "react";
import { useFilterContext } from "../../contexts/Filter_context";
import { OneProduct } from "./OneProduct";

export const ShopPageProducts = () => {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
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

//   if (setGridView === false) {
//     return <div>There is no any List View</div>;
//   }

  //   return (

  //   )
};
