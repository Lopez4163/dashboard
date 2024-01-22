import React from 'react'
import '../Styling/Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar-container'>
            <ul className='ul-links'>
                <li className='link'>
                <span class="material-symbols-outlined">
                    home
                </span>
                </li>
                <li className='link'>
                <span class="material-symbols-outlined">
                    calendar_today
                </span>
                </li>
                <li className='link'>
                <span class="material-symbols-outlined">
                    logout
                </span>
                </li>
            </ul>
    </div>
  )
}

export default Navbar