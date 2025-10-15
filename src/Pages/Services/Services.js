import React from 'react';
import './Services.scss';
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner';
import service1 from '../../Images/service1.png';
import service2 from '../../Images/service2.png';
import service3 from '../../Images/service3.png';
import service4 from '../../Images/service4.png';
import service5 from '../../Images/service5.png';

function Services() {
    return (
        <div>
            <OtherPagesBanner
                leftText="We offer a diverse range of solutions"
                rightText="Our Services"
                otherPagesTextSlide="What we do at"
                otherPagesTextSlideSpan="Hybridsmith"
            />

            <div className="servicesPage">
                <div className="servicesContent">
                    <div className="container">
                        <div className="topContent">
                            <div className='pagesubTitle'>Our Services</div>
                            <div className='pageTitle'>We provide tailored solutions to meet your unique needs.</div>
                        </div>
                        <div className='row g-4' style={{ margin: '20px 0px' }}>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card">
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
                                <div className="card">
                                    <div className="cardIcon">
                                        <img src={service5} alt="Service" className='icon' />
                                    </div>
                                    <div className="cardContent">
                                        <div className="cardTitle">SCM Advisory & Procurement Governance</div>
                                        <div className="cardText">
                                            Vendor audits, contract reviews, supplier performance management, ESG compliance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="card">
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
                                <div className="card">
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
                                <div className="card">
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