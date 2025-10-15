import { useEffect, useRef } from "react";
import './Home.scss'
import Button from '../../Components/Button/Button';
import CounterComponent from '../../Components/Counter/CounterComponent';
import AboutImage from '../../Images/about1.jpg'
import climbImage from '../../Images/climb.png';
import service1 from '../../Images/service1.png';
import service2 from '../../Images/service2.png';
import service3 from '../../Images/service3.png';
import service4 from '../../Images/service4.png';
import service5 from '../../Images/service5.png';
import trainingImage from '../../Images/training.webp';
import TestimonyComponent from "../../Components/TestimonyComponent/TestimonyComponent";
import careerImage from '../../Images/career.jpg';
import WhyChooseUS from "../../Components/whyChooseUs/WhyChooseUS";

function Home() {
    // this is making the homeservciesection to scroll


    return (
        <div>
            <div className="homeBanner">
                <div className='container'>
                    <div className='content'>
                        <div className='title'>World-class manpower. Smarter logistics. <span>Accredited training that delivers results.</span></div>
                        <p>Helping organizations build reliable teams, optimize logistics operations, and empower people with accredited training across drilling, EPC, and industrial projects.</p>
                        <div className='bannerButtons'>
                            <Button text='Talk to an Expert'
                            />
                            <Button text='Explore Training Catalog'
                                design2
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="pageSlidingText">
                <div className="textWrapper">
                    <div className="text">HYBRIDSMITH RESOURCES <span>LIMITED</span></div>
                    <div className="text">HYBRIDSMITH RESOURCES <span>LIMITED</span></div>
                </div>
            </div>

            {/* another section for home about here */}

            <div className='homeAboutSection'>
                <div className='containeroverflow'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <div className='aboutImage'>
                                <img src={AboutImage} alt="About Us" />
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <div className='aboutContent'>
                                <div className='aboutText'>
                                    <div className='subTitle'>About Us</div>
                                    <div className='title'>Helping organizations build reliable teams, optimize logistics, and empower people with accredited training.</div>
                                    <p>Hybridsmith is a manpower and training consultancy specializing in logistics and operational support. We supply warehouse officers, logistics coordinators, fleet managers, EPC engineers, and drilling crews backed by accredited training that ensures safety, efficiency, and measurable impact.</p>
                                    <Button text='Learn More' goTo='/about_us' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* another section here. Why choose Hybridsmith */}
            <WhyChooseUS />


            {/* another section here. let's help you to grow */}

            <div className='helpYouSection'>
                <div className='container'>
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='helpContent'>
                                <div className='helpText'>
                                    <div className='pageTitle'>Let’s Help You Grow</div>
                                    <div className='title'>Ready to optimize your logistics, build a reliable team, and empower your workforce with accredited training? Let’s talk about how Hybridsmith can support your success.</div>
                                    <Button text='Contact Us' goTo='/contact' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='helpImage'>
                                <img src={climbImage} alt="Help You" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* another section for counter here */}
            <div className="countersSection">
                <CounterComponent />
            </div>

            {/* another section here for homeservice */}
            <div className='homeServiceSection' >
                <div className='container'>
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='serviceText' >
                                <div className='pagesubTitle'>WHAT WE DO?</div>
                                <div className='pageTitle'>The services we offer are specifically designed to meet your needs</div>
                                <p>At Hybridsmith, we offer a suite of services designed to meet the complex needs of industrial and energy projects. Our expertise spans manpower supply, logistics management, and accredited training programs — all tailored to help your organization operate safely, efficiently, and compliantly.</p>
                                <Button text='Explore Our Services' goTo='/services' />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12" >
                            <div className="serviceCard" >
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


            <div className="homeTrainingSection">
                {/* another section for training */}
                <div className="pageSlidingText">
                    <div className="textWrapper">
                        <div className="text">HYBRIDSMITH  <span>TRAINING</span></div>
                        <div className="text">HYBRIDSMITH  <span>TRAINING</span></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="trainingImage">
                                <img src={trainingImage} alt="Training" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="trainingContent">
                                <div className="pagesubTitle">TRAINING</div>
                                <div className="pageTitle">SCM & logistics training that delivers real-world results</div>
                                <div className="trainingText">
                                    Our accredited training programs are designed to build practical skills and measurable impact in procurement, logistics, and supply chain management. Whether you need foundational courses for new hires or advanced training for experienced professionals, our curriculum is aligned with global standards and industry best practices.
                                </div>
                                <Button text='Explore Training Catalog' goTo='/training' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* another secton here for testimony */}
            <TestimonyComponent />

            {/* another section here for career page */}
            <div className="careerSection">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="careerContent">
                                <div className="careerText">
                                    <div className="pageTitle">Join Our Team</div>
                                    <div className="title">Join Hybridsmith’s network of logistics professionals, EPC engineers, drilling specialists, and instructors.</div>

                                    <div className="pagesubTitle" style={{ padding: '10px 0px' }}>Our Opportunities includes:</div>
                                    <div className="careerPoints">
                                        <ul>
                                            <li>
                                                <div className="pointCircle">
                                                    <div className="number">01</div>
                                                </div>
                                                Open logistics & warehouse roles
                                            </li>
                                            <li>
                                                <div className="pointCircle">
                                                    <div className="number">02</div>
                                                </div>
                                                Talent pool sign-up
                                            </li>
                                            <li>
                                                <div className="pointCircle">
                                                    <div className="number">03</div>
                                                </div>
                                                Instructor opportunities (logistics & technical)
                                            </li>
                                            <li>
                                                <div className="pointCircle">
                                                    <div className="number">04</div>
                                                </div>
                                                Referral program
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="careerImage">
                                <img src={careerImage} alt="Career" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home