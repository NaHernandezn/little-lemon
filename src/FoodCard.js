import React from 'react'
import { useState, useEffect } from 'react';

export default function FoodCard({ id, imgSrc, imgAlt, foodName, foodPrice, foodDescription, onUpdateOrder}) {
    const [count, setCount] = useState(0);

    function decreaseCount(){
        setCount(prevCount => Math.max(prevCount - 1, 0));
    }
    function increaseCount(){
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
      if (onUpdateOrder) {
          onUpdateOrder(id, count, foodPrice * count, foodName);
      }
  }, [id, count, foodPrice, onUpdateOrder, foodName]);

    return (
      <article className='kard' id={id}>
        <img className='food-img' src={imgSrc} alt={imgAlt} />
        <h3 className='food-name'>{foodName}</h3>
        <h3 className='food-price'>${foodPrice}</h3>
        <p className='food-descrip'>
          {foodDescription}
        </p>
        <button className='food-count' onClick={decreaseCount}>-</button>
        <p className='food-count' id='food-number'>{count}</p>
        <button className='food-count' id='plus' onClick={increaseCount}>+</button>
      </article>
    );
};
