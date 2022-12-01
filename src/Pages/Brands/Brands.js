import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import InnerHeader from '../../Components/Inner_Banners/InnerHeader';

const Brands = () => {

  const heading = {
    name: 'Brands',
    slogan: 'Brand'
  }

  return (
    <div>
      <Header/>
      <InnerHeader heading={heading}/>
      <Footer/>
    </div>
    
  )
}
export  default Brands;