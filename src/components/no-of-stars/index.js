import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function Star({ noStars = 5 }) {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(null);

    function handleClick(index) {
       if(rating===index){
        setRating(0);
       }else setRating(index);
        console.log(rating);
    }

    function handleMove(index) {
        setHover(index);
    }

    function handleLeave(index) {
       setHover(rating)
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMove(index)}
                            onMouseLeave={()=>handleLeave(index)}
                            className={(index <= hover) || (index <= rating) ? "active" : "inactive"}
                            size={40} />
                    );
                })
            }
        </div>
    )
}
