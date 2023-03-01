import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

export const CartAmountToggle = ({amount, setIncrease, setDecrease}) => {
  
    return (
    <div>
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={()=> setDecrease()}>
                    <FaMinus/>
                </button>
                <div className="amout-style">{amount}</div>
                <button onClick={()=> setIncrease()}>
                    <FaPlus/>
                </button>
                
            </div>
        </div>      
    </div>

    
  )
}
