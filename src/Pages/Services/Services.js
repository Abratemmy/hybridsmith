import React, { useEffect } from 'react';
import './Services.scss';
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner';
import service1 from '../../Images/service1.png';
import service2 from '../../Images/service2.png';
import service3 from '../../Images/service3.png';
import service4 from '../../Images/service4.png';

import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            offset: 100, // offset (in px) from the original trigger point
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <OtherPagesBanner
                leftText="We offer a diverse range of solutions"
                rightText="Our Services"
                otherPagesTextSlide="Solutions that move industries "
                otherPagesTextSlideSpan="forward."
            />

            <div className="servicesPage">
                <div className="servicesContent">
                    <div className="container">
                        <div className="topContent">
                            <div className='pagesubTitle'>Our Services</div>
                            <div className='pageTitle'>We provide tailored solutions to meet your unique needs.</div>
                            <div className='pageText'>
                                At Hybridsmith, we connect people, systems, and logistics to create performance you can measure. Our services are designed for organizations that demand reliability, speed, and safety  from project start-up to long-term operations.
                            </div>
                        </div>
                        <div className='row g-4' style={{ margin: '20px 0px' }}>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card" data-aos="fade-up" data-aos-duration="1000" >
                                    <div className="cardIcon">
                                        <img src={service1} alt="Service" className='icon' />
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardTitle">Manpower Outsourcing & Project Staffing</div>
                                        <div className="cardText">
                                            Skilled engineers, SCM officers, HSE/QA specialists for projects and operations
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card" data-aos="fade-up" data-aos-duration="1100">
                                    <div className="cardIcon">
                                        <img src={service4} alt="Service" className='icon' />
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardTitle">Logistics & Warehousing Solutions</div>
                                        <div className="cardText">
                                            Inventory optimization, expediting, transport scheduling, warehouse digitization.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="cardIcon">
                                        <img src={service3} alt="Service" className='icon' />
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardTitle">Competency Mapping & Skills Assessment</div>
                                        <div className="cardText">
                                            Gap analysis, assessment centers, SCM maturity models.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card" data-aos="fade-up" data-aos-duration="1300">
                                    <div className="cardIcon">
                                        <img src={service2} alt="Service" className='icon' />
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardTitle">Training & Certification (Technical + SCM)</div>
                                        <div className="cardText">
                                            Procurement, logistics, HSE, and technical training aligned to global standards
                                        </div>
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

export default Services