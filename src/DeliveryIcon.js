import React from 'react'
import { Link } from 'react-router-dom'
import Bike from './Assets/bicycle_1471551.png'

export default function DeliveryIcon() {
  return (
    <>
        <Link to='/menu' className='delivery'>
            Order delivery
        </Link>
        <Link to='/menu'>
            <img className='bike' src={Bike} alt='Bycicle icon'/>
        </Link>
    </>
  )
}
