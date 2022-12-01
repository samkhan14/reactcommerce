import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";

const About = () => {
  const heading = {
    name: "About Us",
    slogan: "About",
  };

  return (
    <div>
      <Header />
      <InnerHeader heading={heading} />
      <Footer />
    </div>
  );
};
export default About;
