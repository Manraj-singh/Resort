import React, { useState } from 'react'
import logo from "../images/logo.svg";
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handletoggle =()=>{
        {isOpen?setIsOpen(false):setIsOpen(true)}
    }
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='Beach resort' />
                    </Link>
                    <button type='button' onClick={handletoggle} className='nav-btn'>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                </div>
                <ul className={isOpen?"nav-links show-nav":"nav-links"} >
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='rooms'>
                        Rooms
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
