import React from 'react'
import InnerHeader from '../../Components/Inner_Banners/InnerHeader';

const Cart = () => {

  const heading = {
    name: "Cart",
    slogan:"Cart",
  }

  return (
    <div>   
    <InnerHeader heading={heading}/>  
    </div>
  )
}
export default Cart;