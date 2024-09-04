import React from 'react'
import Restaurant from './Assets/restauranfood.jpg'
import RedirectButton from './RedirectButton'

export default function Header() {
  return (
    <header className='head'>

      <h1 className='head-text' style={{ fontSize: '4.444vw', color: '#F4CE14'}}>Little Lemon</h1>

      <h2 className='head-text' style={{ fontSize: '2.778vw', color: '#EDEFEE'}}>Chicago</h2>

      <p className='head-text' style={{ fontSize: '1.389vw', color: '#EDEFEE'}}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>
      <img className='head-img' src={Restaurant} alt="Chef's food"/>
      <RedirectButton route='/reservations' label='Reserve Online'/>
    </header>
  )
}