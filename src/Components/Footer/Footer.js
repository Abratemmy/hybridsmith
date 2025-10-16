import React from 'react';
import './Footer.scss';
import { BsDot } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { MdOutlineAddIcCall, MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../../Images/logo.png'

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="container">
                <div className="row g-1 footer-row">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="image">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="pageText" style={{ padding: '10px 0px' }}>Hybridsmith is a manpower and training consultancy specializing in logistics and operational support. </div>
                            <div className="footerCall" style={{ padding: '20px 0px 10px' }}>
                                <MdMessage className="call" />
                                <div className="footer-title">Support
                                    <span> <a href="mailTo:info@hybridsmith.com">info@hybridsmith.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Quick links</div>
                            <div className="footerLinkArea">
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/about_us" className="footer-link">About Us</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/contact_us" className="footer-link">Contact</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services" className="footer-link">Services</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/training" className="footer-link">Training</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">MAKE an Appointment</div>
                            <div className="pageText">
                                Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
                            </div>
                            <div className="footerCallArea">
                                <div className="footerCall">
                                    <MdOutlineAddIcCall className="call" />
                                    <div className="footer-title">Need a Consultation?
                                        <span>(+234) 807 836 6949 </span>
                                    </div>
                                </div>

                                <div className="footerCall">
                                    <FaLocationDot className="call" />
                                    <div className="footer-title">Office
                                        <span> 9 Anifowoshe Street, Victoria Island Lagos</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyrightContainer">
                    <div className='copyright'>&copy;copyright, all right reserved {(new Date().getFullYear())} </div>
                </div>
            </div>
        </div>
    )
}

export default Footer