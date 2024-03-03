import React, { useEffect, useState } from 'react';
import "./Header.css"
import logo from "../../assets/graduation-cap.png"
import menuIcon from "../../assets/menu-icon.png"
import {Link} from 'react-scroll';

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    const toggleMenu = () => {
        if(mobileMenu){
            setMobileMenu(false)
        }else{
            setMobileMenu(true)
        }
    }
    return (
        <nav className={`container ${sticky ? "dark" : ""}`}>
            <div className="img-wrap">
                <img src={logo} alt="Logo" className='logo' /> <span>EDU-TECH</span>
            </div>
            <ul className={`${mobileMenu ? "" : "hide-mobile-menu"}`}>
                <li className='list'><Link to="banner" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li className='list'><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li className='list'><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li className='list'><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
                <li className='list'><Link to="testimonial" smooth={true} offset={-250} duration={500}>Testimonail</Link></li>
                <li className='list'><Link to="contact" smooth={true} offset={-250} duration={500}><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src={menuIcon} alt="menuicon" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Header