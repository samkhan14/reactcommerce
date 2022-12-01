import React from 'react'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import InnerHeader from "../../Components/Inner_Banners/InnerHeader";

const Contact = () => {

  const heading = {
    name: "Contact Us",
    slogan: "Contact",
  };

  return (
    <div>
        <Header />
      <InnerHeader heading={heading} />
      <Footer />
    </div>
  )
}
export default Contact;