import React from 'react'

export default function Footer() {
  return (
    <footer className='foot'>
        <h2 className='naviga'>Navigation</h2>
        <ul className='naviga'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Log in</li>
        </ul>
        <h2 className='contc'>Contact</h2>
        <ul className='contc'>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
        <h2 className='smlinks'>Social media links</h2>
        <ul className='smlinks'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
    </footer>
  )
}
