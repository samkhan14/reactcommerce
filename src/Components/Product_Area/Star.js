import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

export const Star = ({stars, reviews}) => {
    const ratingstar = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5;

        return  (
        <span key={index}>
            {stars > index + 1 ? (
                <FaStar className='icon' />
            ) : stars > number ? (
                <FaStarHalfAlt className="icone" />
            ) : (
                <AiOutlineStar className='icon' />
            )}
        </span>      
        )
    });

  return (
    <div className="ratingstars">
        {ratingstar}
        <p>{reviews} customer reviews</p>
    </div>
  )
}
