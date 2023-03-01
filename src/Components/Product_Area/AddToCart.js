import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { CartAmountToggle } from './CartAmountToggle';

export const AddToCart = ({ product }) => {
    const {id, colors, stock } = product;

    //usestate for set colors and set amount
   const [color, setcolor] = useState(colors[0])
   const [amount, setamount] = useState(1)

//    Quantity Decrease
    const setDecrease = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1); 
    }

    //    Quantity Increase
    const setIncrease = () => {
        amount < stock ? setamount(amount + 1) : setamount(stock);  
    }

    return (
        <>
    <div className="product_colors">
        <p>
            Colors:
            {
                colors.map((curColor, index) => {
                    return <button key={index} style={{backgroundColor:curColor}} className={color === curColor ? "colorsBtn active" : "colorsBtn" } onClick={()=> setcolor(curColor)}>
                       {color === curColor ? <FaCheck className='text-white' /> : null}     
                    </button>
                })
            }
        </p>
    </div>

    {/* // cart amount */}
    <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}  />
    
    </>
  )
}
