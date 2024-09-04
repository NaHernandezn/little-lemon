import React from 'react';
import Logo from './Assets/Logo.svg';
import Basket from './Assets/Basket.svg'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav-bar'>
        <Link to='/'>
            <img src={Logo} alt="Little Lemon logo"/>
        </Link>
        <ul className='horizontal_list'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <a href='#about'>About</a>
            </li>

            <li>
                <Link to='/menu'>Menu</Link>
            </li>

            <li>
                <Link to='/reservations'>Reservations</Link>
            </li>

            <li>
                <Link to='/menu'>Order online</Link>
            </li>

        </ul>
        <img src={Basket} alt='Basket logo' id='basket'/>
    </nav>
  );
}
