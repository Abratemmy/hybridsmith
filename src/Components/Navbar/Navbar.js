import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { MdOutlineAddIcCall, MdEmail, MdAccessTime } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from '../../Images/logo.png';


function Navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [click])

    return (
        <div className="navbarContainer">
            {navbarScroll ?
                <div className="whenScroll">
                    <div className="container" style={{ background: '#fff' }}>
                        <div className="navbarSession">
                            <NavLink to="/" className="imageContainer">
                                <img src={logo} alt="logo" />
                            </NavLink>

                            <ul className="nav-menu active">
                                <li className='nav-item'>
                                    <NavLink exact to="/" className="nav-links" >Home</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink exact to="/about_us" className="nav-links" >About Us</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/services" className="nav-links" >Services</NavLink>
                                </li>


                                <li className='nav-item'>
                                    <NavLink to="/training" className="nav-links">Training</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/contact_us" className="nav-links" >Contact</NavLink>
                                </li>
                            </ul>

                            <div className="hamburger" onClick={handleClick} >
                                <FaBars className="hamburgerIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className=" whenNotScroll">
                    <div className="container">
                        <div className="topNav">
                            <div className='left'>
                                <div className="container">
                                    <div className="content">
                                        <div className="iconContainer"><MdOutlineAddIcCall className="icon" /></div>
                                        <div className="text">
                                            <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>

                                <div className="content">
                                    <div className="iconContainer"><MdEmail className="icon" /></div>
                                    <div className="text">
                                        <a href="maitTo:info@hybridsmith.com">info@hybridsmith.com</a>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="iconContainer"><MdAccessTime className="icon" /></div>
                                    <div className="text">
                                        Mon to Fri : 9am to 6pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainNavbar">
                        <div className="container">
                            <div className='navbarSession'>
                                <NavLink to="/" className="imageContainer">
                                    <img src={logo} alt="Logo" />
                                </NavLink>
                                <div className="menuList">
                                    <ul className="nav-menu active">
                                        <li className='nav-item'>
                                            <NavLink exact to="/" className="nav-links">Home</NavLink>
                                        </li>

                                        <li className='nav-item'>
                                            <NavLink exact to="/about_us" className="nav-links">About Us</NavLink>
                                        </li>

                                        <li className='nav-item'>
                                            <NavLink to="/services" className="nav-links">Services</NavLink>
                                        </li>

                                        <li className='nav-item'>
                                            <NavLink to="/training" className="nav-links">Training</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="/contact_us" className="nav-links" >Contact</NavLink>
                                        </li>

                                    </ul>

                                    <div className="hamburger" onClick={handleClick} >
                                        <FaBars className="hamburgerIcon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Overlay */}
            <div className={`overlay ${click ? "show" : ""}`} onClick={handleClick}></div>

            {/* mobile menu */}
            <div className={`mobileMenu ${click ? "show" : ""}`}>
                <div className="closeMobileMenu" onClick={handleClick}>
                    <div className='closeIcon'><IoMdClose className="icon" /></div>
                </div>
                <div className="imageContainer">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink exact="true" to="/" className="nav-links" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" to="/about_us" className="nav-links" onClick={handleClick}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-links" onClick={handleClick}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/training" className="nav-links" onClick={handleClick}>Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact_us" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar