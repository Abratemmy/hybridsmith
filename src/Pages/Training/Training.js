import React, { useState, useRef } from 'react';
import './Training.scss';
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner';
import { MdOutlineAddIcCall, MdEmail } from "react-icons/md";
import TrainingForm from './TrainingForm';


function Training() {

    const [activeTab, setActiveTab] = useState("readmore");

    // this section is for to scroll to where the training form is
    const formRef = useRef(null);
    const scrollToForm = () => {
        if (formRef.current) {
            const formPosition = formRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = window.innerHeight * 0.1; // 10% from top
            window.scrollTo({
                top: formPosition - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <OtherPagesBanner
                leftText="Sharpen Skills. Strengthen Systems."
                rightText="Our Training"
                otherPagesTextSlide="Training That Drives"
                otherPagesTextSlideSpan="Results"
            />

            <div className="trainingPage">
                <div className="trainingPageContent">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-9 col-md-12 col-sm-12 ">
                                <div className="topContent">
                                    <div className='pagesubTitle'>Our Training</div>
                                    <div className='pageTitle'>Accredited training that builds competence, confidence, and compliance.</div>
                                    <div className='pageText'>
                                        At Hybridsmith, we understand that a well-trained workforce is the backbone
                                        of any successful organization. That's why we offer a comprehensive range of
                                        accredited training programs designed to enhance skills, improve safety, and boost
                                        productivity across various industries.
                                    </div>

                                    <div className='pageText'>
                                        Our training programs are designed for real-world performance.
                                        Delivered by industry practitioners, every course combines practical learning with measurable outcomes — equipping teams
                                        to work smarter, safer, and more efficiently.
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-7 col-sm-12 ">
                                <div className="trainingContactCard">
                                    <div className="contactCardTitle" onClick={scrollToForm}>Request Training</div>
                                    <div className="content1">
                                        <div className="iconContainer"><MdOutlineAddIcCall className="icon" /></div>
                                        <div className="text">
                                            <a href="tel:(+234) 901 882 1570">(+234) 901 882 1570</a>
                                        </div>
                                    </div>

                                    <div className="content1">
                                        <div className="iconContainer"><MdEmail className="icon" /></div>
                                        <div className="text">
                                            <a href="maitTo:info@hybridsmith.com">info@hybridsmith.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* session for training tabs here */}
                        <div className="tabsContainer">
                            <div className="tabsHeader">
                                <button
                                    className={activeTab === "readmore" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("readmore")}
                                >
                                    Learn More
                                </button>
                                <button
                                    className={activeTab === "category" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("category")}
                                >
                                    Training Categories
                                </button>
                                <button
                                    className={activeTab === "delivery" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("delivery")}
                                >
                                    Delivery Options
                                </button>
                            </div>

                            <div className="tabContent">
                                {activeTab === "readmore" && (
                                    <div>
                                        <div className='pageText'>
                                            Explore the tabs to learn more about this training
                                        </div>
                                    </div>
                                )}

                                {activeTab === "category" && (
                                    <div>
                                        <div className='title'>Our Training categories include: </div>
                                        <div className="pageText"><strong><span>1.</span>Logistics & Operational Excellence</strong>
                                            <ul>
                                                <li>Warehousing & Inventory Control</li>
                                                <li>Transport & Fleet Management</li>
                                                <li>Procurement & Vendor Compliance</li>
                                            </ul>
                                        </div>

                                        <div className="pageText"><strong><span>2.</span>Technical & Engineering Training</strong>
                                            <ul>
                                                <li>PLC Fundamentals</li>
                                                <li>Rotating Equipment Maintenance</li>
                                                <li>EPC Project Controls</li>
                                            </ul>
                                        </div>

                                        <div className="pageText"><strong><span>3.</span>Safety & Compliance</strong>
                                            <ul>
                                                <li>H₂S Awareness</li>
                                                <li>Turnaround & Shutdown Planning</li>
                                                <li>Safety Leadership</li>
                                            </ul>
                                        </div>

                                        <div className="pageText"><strong><span>4.</span>Management & Governance</strong>
                                            <ul>
                                                <li>Strategic Procurement</li>
                                                <li>Vendor Performance & Risk Management</li>
                                                <li>Contracting for Performance</li>
                                            </ul>
                                        </div>

                                    </div>
                                )}

                                {activeTab === "delivery" && (
                                    <div>
                                        <div className='title'>Delivery Options</div>
                                        <ul>
                                            <li>Instructor-Led Training (ILT)</li>

                                            <li>Virtual Instructor-Led Training (VILT)</li>

                                            <li>Blended Learning</li>

                                            <li>In-House Corporate Programs </li>
                                        </ul>

                                        <div className='title'>Accreditation:</div>
                                        <div className='pageText'>
                                            Programs align with ISO, IOSH, and NEBOSH standards.
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* training form */}
                        <div className="trainingFormContainer" ref={formRef}>
                            <div className='pagesubTitle'>Request a training Session</div>
                            <div className='pageTitle'>Get in Touch</div>
                            <div className='pageText'>
                                Please fill out the form below to request training or ask any questions you may have. We look forward to hearing from you!
                            </div>

                            <TrainingForm />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training