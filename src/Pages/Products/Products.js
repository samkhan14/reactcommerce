import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";

const Products = () => {
  const heading = {
    name: "Products",
    slogan: "Shop",
  };

  return (
    <div>
      <Header />
      <InnerHeader heading={heading} />
      <Footer />
    </div>
  );
};
export default Products;
