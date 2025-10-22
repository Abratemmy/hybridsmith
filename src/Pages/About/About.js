import React, { useState } from 'react'
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner'
import './About.scss';
import aboutImage from '../../Images/banner1.png'
import WhyChooseUS from '../../Components/whyChooseUs/WhyChooseUS';
import Button from '../../Components/Button/Button';
import { MdOutlineAddIcCall } from 'react-icons/md';

function About() {

    const [activeTab, setActiveTab] = useState("mission");
    return (
        <div>
            <OtherPagesBanner
                leftText="Driven by People. Defined by Excellence."
                rightText="About Us"
                otherPagesTextSlide="People. Process. "
                otherPagesTextSlideSpan="Performance."
            />

            <div className="aboutUsPage">
                <div className="aboutUsContent">
                    <div className="container">
                        <div className='row g-4'>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="content">
                                    <div className='pagesubTitle'>About Us</div>
                                    <div className='pageTitle'>Empowering industries through manpower, logistics, and learning.</div>
                                    <div className='pageText'>
                                        Hybridsmith Limited is a leading manpower, logistics, and training consultancy committed to helping organizations achieve operational excellence.
                                    </div>
                                    <div className="pageText">
                                        We bridge the gap between people, systems, and performance, delivering the expertise, governance, and training that turn everyday operations into measurable success.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="imageContainer">
                                    <img src={aboutImage} alt="About Us" />
                                </div>
                            </div>
                        </div>

                        <div className="tabsContainer">
                            <div className="tabsHeader">
                                <button
                                    className={activeTab === "mission" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("mission")}
                                >
                                    OUR MISSION
                                </button>
                                <button
                                    className={activeTab === "vision" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("vision")}
                                >
                                    OUR VISION
                                </button>
                                <button
                                    className={activeTab === "value" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("value")}
                                >
                                    OUR CORE VALUES
                                </button>
                            </div>

                            <div className="tabContent">
                                {activeTab === "mission" && (
                                    <div>
                                        <div className='pageText'>
                                            To help organizations build reliable teams, optimize logistics operations, and empower people through accredited training that drives performance and safety.
                                        </div>
                                    </div>
                                )}

                                {activeTab === "vision" && (
                                    <div className='pageText'>
                                        To be Africa’s most trusted manpower and logistics partner, setting new standards for reliability, professionalism, and performance.
                                    </div>
                                )}

                                {activeTab === "value" && (
                                    <div>
                                        <ul>
                                            <li><strong>Professionalism: </strong> Precision, accountability, and excellence in execution.</li>

                                            <li><strong>Integrity: </strong> We deliver what we promise, every time.</li>

                                            <li><strong>Safety: </strong> Every project, every person, zero incidents.</li>

                                            <li><strong>Innovation: </strong> Using data and technology to simplify logistics.</li>

                                            <li><strong>Partnership: </strong> Collaboration and trust drive everything we do.</li>
                                        </ul>

                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                {/* whyChoose us section */}
                <WhyChooseUS />

                {/* another section here */}

                <div className="aboutBannerSectionWrapper">
                    <div className="container">
                        <div className='row g-4'>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contentWrapper">
                                    <div className='pagesubTitle'>What we do</div>
                                    <div className='pageTitle'>Hybridsmith offers end-to-end support across manpower, logistics, and training.</div>
                                    <div className='pageText'><strong>Our Solutions Include:</strong> </div>

                                    <div className='pageText'>
                                        <ul>
                                            <li>Technical and logistics manpower outsourcing</li>
                                            <li>Warehouse and transport optimization</li>
                                            <li>Procurement and governance support</li>
                                            <li>Accredited training and competency development</li>
                                        </ul>
                                    </div>

                                    <div className='pageText'>We’ve delivered manpower and logistics solutions for EPC, oil & gas, power, and industrial clients, deploying over 1,000 professionals to projects across Nigeria and West Africa.</div>

                                    <div style={{ marginTop: '20px' }}>
                                        <Button text='View Our Services' goTo='/services' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className='aboutbannerContent'>
                                    <div className='pagesubTitle'>Our Promise</div>
                                    <div className='pageTitle'>Performance you can measure. Partnerships you can trust.</div>
                                    <div className='pageText'>We combine deep industry expertise with modern logistics and governance tools to ensure every client achieves operational efficiency and compliance.</div>
                                    <div className="bannerLink">
                                        <div className="pagesubTitle">
                                            <MdOutlineAddIcCall className="icon" />
                                            <span>Call us to request our services:</span>

                                            <div className="text">
                                                <a href="tel:(+234) 901 882 1570">(+234) 901 882 1570</a>
                                            </div>
                                        </div>
                                        <div className="or">Or</div>
                                        <Button text="Contact Us"
                                            goTo="/contact_us"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default About