import React from "react";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";

const About = () => {
  const heading = {
    name: "About Us",
    slogan: "About",
  };

  return (
    <div>    
      <InnerHeader heading={heading} />    
    </div>
  );
};
export default About;
