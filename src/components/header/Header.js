import React, { useEffect, useState } from 'react';
import "./Header.css"
import logo from "../../assets/logo.png"
import {Link} from 'react-scroll';

const Header = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    return (
        <nav className={`nav-wrap container ${sticky ? "dark" : ""}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className='nav-list'>
                <li className='list'><Link to="banner" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li className='list'><Link to="programs" smooth={true} offset={0} duration={500}>Program</Link></li>
                <li className='list'><Link to="about" smooth={true} offset={0} duration={500}>About us</Link></li>
                <li className='list'><Link to="campus" smooth={true} offset={0} duration={500}>Campus</Link></li>
                <li className='list'><Link to="testimonial" smooth={true} offset={0} duration={500}>Testimonail</Link></li>
                <li className='list'><Link to="contact" smooth={true} offset={0} duration={500}><button className='btn'>Contact us</button></Link></li>
            </ul>
        </nav>
    )
}

export default Header