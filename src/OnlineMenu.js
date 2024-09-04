import React from 'react'
import FoodCard from './FoodCard'
import { useState, useCallback } from 'react'
import GreekSalad from './Assets/greek salad.jpg'
import Bruschetta from './Assets/bruchetta.png'
import Chicken from './Assets/chicken.jpg'
import Cheese from './Assets/cheese.jpg'
import LemonCake from './Assets/lemon dessert.jpg'
import Octopus from './Assets/octupus.jpg'
import RedirectButton from './RedirectButton'

export default function OnlineMenu() {
  const [order, setOrder] = useState({});

  const handleUpdateOrder = useCallback((id, count, totalPrice, foodName) => {
    if (count > 0) {
        setOrder(prevOrder => ({
            ...prevOrder,
            [id]: { count, totalPrice, foodName }
        }));
    } else {
        setOrder(prevOrder => {
            const { [id]: removed, ...rest } = prevOrder;
            return rest;
        });
    }
  }, []);
  return (
    <section className='online-menu'>
        <h1>Order Online</h1>
        <FoodCard
          id='kard1'
          imgSrc= {Bruschetta}
          imgAlt="Bruschetta"
          foodName="Bruschetta"
          foodPrice={5.99}
          foodDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          onUpdateOrder={handleUpdateOrder}
        />

        <FoodCard
          id='kard2'
          imgSrc={Chicken}
          imgAlt='Chicken Shawarma'
          foodName='Chicken Shawarma'
          foodPrice={15.99}
          foodDescription='Free-range chicken slow-cooked in a house-made harissa marinade, wrapped in a warm, hand-rolled flatbread.'
          onUpdateOrder={handleUpdateOrder}
        />

        <FoodCard
          id='kard3'
          imgSrc={GreekSalad}
          imgAlt="Greek Salad"
          foodName="Greek Salad"
          foodPrice={12.99}
          foodDescription="The famous Greek salad, of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."
          onUpdateOrder={handleUpdateOrder}
        />

        <FoodCard
          id='kard4'
          imgSrc={Cheese}
          imgAlt='Grilled Halloumi with Fig Jam'
          foodName='Grilled Halloumi'
          foodPrice={9.00}
          foodDescription='Salty, squeaky halloumi cheese grilled until golden and served with a side of house-made fig jam, spiked with organic rosemary. A perfect harmony of sweet and savory.'
          onUpdateOrder={handleUpdateOrder}
        />

        <FoodCard
          id='kard5'
          imgSrc={LemonCake}
          imgAlt='Lemon Cake'
          foodName='Lemon Cake'
          foodPrice={5.00}
          foodDescription="This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
          onUpdateOrder={handleUpdateOrder}
        />

        <FoodCard
          id='kard6'
          imgSrc={Octopus}
          imgAlt='Octopus Carpaccio'
          foodName='Octopus Carpaccio'
          foodPrice={23.99}
          foodDescription='Wild-caught octopus, cured in lemon zest and extra virgin olive oil. Served with microgreens, shaved fennel, and a tangy citrus vinaigrette.'
          onUpdateOrder={handleUpdateOrder}
        />
        <RedirectButton id='order-button' route='/purchase' label='Place Order' state={{ order }}/>

    </section>
  )
}
