import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo3.png'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [sticky,setSticky]= useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
        })
    },[]);

    
    const [mobileMenu, setMobileMenu] = useState(false);
    const togglemenu = ()=>{
       mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <a href='#About'><img className='logo' src={logo} alt='logo' /></a>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#Available'>Our Products</a></li>
        <li><a href='#Move'>Deals</a></li>
        <li><a href='#About'>About Us</a></li>
        <li><a href='#Container1'>Our heros</a></li>
        <a href='#Contact' className='btn'>Contact Us</a>
      </ul>
      <span className='menu-icon' onClick={togglemenu}><GiHamburgerMenu /></span>
    </nav>
  )
}

export default Navbar
