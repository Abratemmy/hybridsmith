import React, { useState, useRef } from 'react';
import './Training.scss';
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner';
import { MdOutlineAddIcCall, MdEmail } from "react-icons/md";


function Training() {

    const [activeTab, setActiveTab] = useState("readmore");

    // this section is for to scroll to where the training form is
    const formRef = useRef(null);
    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
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
                                    <div className='pageTitle'>Empowering Your Workforce with Accredited Training Programs</div>
                                    <div className='pageText'>
                                        At Hybridsmith, we understand that a well-trained workforce is the backbone
                                        of any successful organization. That's why we offer a comprehensive range of
                                        accredited training programs designed to enhance skills, improve safety, and boost
                                        productivity across various industries. Our training solutions are tailored to meet the
                                        unique needs of your business, ensuring that your team is equipped with the knowledge and
                                        expertise required to excel in their roles.
                                    </div>

                                    <div className='pageText'>
                                        Our catalog emphasizes logistics and operations training, while also covering drilling, EPC, and safety programs.
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-7 col-sm-12 ">
                                <div className="trainingContactCard">
                                    <div className="contactCardTitle" onClick={scrollToForm}>Request Training</div>
                                    <div className="content1">
                                        <div className="iconContainer"><MdOutlineAddIcCall className="icon" /></div>
                                        <div className="text">
                                            <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>
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
                                    className={activeTab === "outline" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("outline")}
                                >
                                    Course Outline
                                </button>
                                <button
                                    className={activeTab === "learn" ? "tabButton active" : "tabButton"}
                                    onClick={() => setActiveTab("learn")}
                                >
                                    In the Class, You Will Learn...
                                </button>
                            </div>

                            <div className="tabContent">
                                {activeTab === "readmore" && (
                                    <div>
                                        <div className='pageText'>
                                            Explore the tabs to learn more about this course
                                        </div>
                                    </div>
                                )}

                                {activeTab === "outline" && (
                                    <div>
                                        <div className='title'>Our Course outline include: </div>
                                        <ul>
                                            <li>Logistics & Warehousing Excellence</li>
                                            <li>Transport & Fleet Management</li>
                                            <li>Inventory Control & Warehouse Digitization</li>
                                            <li>Supplier Performance & Risk Management</li>
                                            <li>EPC Project Controls</li>
                                            <li>Turnaround & Shutdown Planning</li>
                                            <li>PLC Fundamentals</li>
                                            <li>Rotating Equipment Maintenance</li>
                                            <li>H2S Awareness</li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === "learn" && (
                                    <div>
                                        <div className='title'>Learning Outcomes</div>
                                        <ul>
                                            <li><strong>Logistics & Warehousing Excellence:</strong> Learn to design efficient warehouse layouts, streamline material flow, and optimize logistics performance using global best practices.</li>

                                            <li><strong>Transport & Fleet Management:</strong> Understand how to plan, schedule, and maintain transport fleets for reliability, safety, and cost-effectiveness.</li>

                                            <li><strong>Inventory Control & Warehouse Digitization:</strong> Master techniques for real-time inventory tracking, demand forecasting, and using digital tools for warehouse automation.</li>

                                            <li><strong>Supplier Performance & Risk Management:</strong> Gain skills in vendor evaluation, contract compliance, and mitigating supply chain risks for better resilience.</li>

                                            <li><strong>EPC Project Controls:</strong> Learn how to manage budgets, schedules, and resources effectively in complex Engineering, Procurement, and Construction projects.</li>

                                            <li><strong>Turnaround & Shutdown Planning:</strong> Develop the ability to coordinate large-scale maintenance activities safely, on time, and within budget.</li>

                                            <li><strong>PLC Fundamentals:</strong> Understand the basics of programmable logic controllers, automation systems, and industrial control applications.</li>

                                            <li><strong>Rotating Equipment Maintenance:</strong> Learn diagnostic, preventive, and corrective maintenance for pumps, compressors, and turbines.</li>

                                            <li><strong>H₂S Awareness:</strong> Identify hydrogen sulfide hazards, understand emergency procedures, and apply safety protocols for high-risk environments.</li>
                                        </ul>

                                        <div className='pageText'>
                                            By the end of this training, individuals and teams will be well-equipped with the knowledge and skills to enhance operational efficiency, ensure safety, and drive continuous improvement within their organizations.
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* training form */}
                        <div className="trainingForm" ref={formRef}>
                            <div className='pagesubTitle'>Request Training</div>
                            <div className='pageTitle'>Get in Touch</div>
                            <div className='pageText'>
                                Please fill out the form below to request training or ask any questions you may have. We look forward to hearing from you!
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training