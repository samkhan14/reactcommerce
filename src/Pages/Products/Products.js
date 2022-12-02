import React from "react";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";

const Products = () => {
  const heading = {
    name: "Products",
    slogan: "Shop",
  };

  return (
    <div>    
      <InnerHeader heading={heading} />   
    </div>
  );
};
export default Products;
