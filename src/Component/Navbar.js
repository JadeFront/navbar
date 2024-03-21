import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const [ openClose, setOpenClose ] = useState(false);

    const navButton = () => {
        setOpenClose(!openClose);
    }
  return (
    <nav className='container'>
        <div>
            <h1>LOGO</h1>
        </div>

        <div className='navbar'>
            <div>   
                <button className='navButton' onClick={navButton}><FaBars /></button>
            </div>
            
            <div className={`navlinks ${openClose ? "active" : ""}`}>
                <ul>   
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar