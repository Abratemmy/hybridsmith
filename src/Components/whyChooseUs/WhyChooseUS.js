import React, { useEffect } from 'react';
import './WhyChooseUs.scss';
import { IoHardwareChipSharp, IoTrainOutline, IoTrailSignSharp } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";
import whychooseImage from '../../Images/whychooseus.png';
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUS() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            offset: 100, // offset (in px) from the original trigger point
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className='whyChooseSection'>
                <div className='container'>
                    <div className="row" g-4>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='chooseContent'>
                                <div className='pagesubTitle'>Why Choose Hybridsmith?</div>
                                <div className='pageTitle'>Why Choose Hybridsmith?</div>
                                <div className='chooseText'>
                                    At Hybridsmith, we understand that the success of your operations hinges on having the right people in the right roles, supported by effective logistics and training. Here’s why organizations choose us as their trusted partner:
                                </div>

                                {/* ✅ One choosePoints container */}
                                <div className='choosePoints'>
                                    <div className='point' data-aos="fade-right">
                                        <div className="pointImage">
                                            <div className="pointCircle">
                                                <LuWarehouse className='icon' />
                                            </div>
                                        </div>
                                        <div className="pointContent">
                                            <div className='pointTitle'>Deep expertise in logistics and warehousing</div>
                                            <div className="pointText">
                                                We bring years of proven experience in managing logistics operations and warehouse systems for industrial and energy projects. From inventory control to fleet coordination, our solutions are built for efficiency, reliability, and scalability.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='point' data-aos="fade-right">
                                        <div className="pointImage">
                                            <div className="pointCircle">
                                                <IoHardwareChipSharp className='icon' />
                                            </div>
                                        </div>
                                        <div className="pointContent">
                                            <div className='pointTitle'>Strong Background in Technical Manpower Staffing</div>
                                            <div className="pointText">
                                                Our team understands the technical demands of drilling and EPC environments. We supply skilled, pre-vetted professionals — engineers, technicians, and site crews — who are trained to deliver high performance in complex project settings.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='point' data-aos="fade-right">
                                        <div className="pointImage">
                                            <div className="pointCircle">
                                                <IoTrainOutline className='icon' />
                                            </div>
                                        </div>
                                        <div className="pointContent">
                                            <div className='pointTitle'>Integrated Training and Certification</div>
                                            <div className="pointText">
                                                We don’t just provide manpower; we build competence. Our accredited training programs ensure every professional meets industry standards in safety, technical skills, and compliance — guaranteeing measurable impact on your operations.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='point' data-aos="fade-right">
                                        <div className="pointImage">
                                            <div className="pointCircle">
                                                <IoTrailSignSharp className='icon' />
                                            </div>
                                        </div>
                                        <div className="pointContent">
                                            <div className='pointTitle'>Compliance-First, Safety-Driven Culture</div>
                                            <div className="pointText">
                                                At Hybridsmith, safety and compliance are not optional — they are part of our DNA. We operate with strict adherence to regulatory standards, ensuring every project and worker contributes to a safer, more productive workplace.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='chooseImage'>
                                <img src={whychooseImage} alt="Why Choose Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUS