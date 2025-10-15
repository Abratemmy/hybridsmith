import React from 'react'
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner'
import './About.scss';
import aboutImage from '../../Images/banner1.png'
import WhyChooseUS from '../../Components/whyChooseUs/WhyChooseUS';
import Button from '../../Components/Button/Button';
import { MdOutlineAddIcCall } from 'react-icons/md';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,   // only animate once
        threshold: 0.5,      // 50% of section visible triggers it
    });
    return (
        <div>
            <OtherPagesBanner
                leftText="Driven by People. Defined by Excellence."
                rightText="About Us"
                otherPagesTextSlide="About"
                otherPagesTextSlideSpan=" Hybridsmith"
            />

            <div className="aboutUsPage">
                <div className="aboutUsContent">
                    <div className="container">
                        <div className='row g-4'>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="content">
                                    <div className='pagesubTitle'>About Us</div>
                                    <div className='pageTitle'>Helping organizations build reliable teams, optimize logistics, and empower people with accredited training.</div>
                                    <div className='pageText'>
                                        Hybridsmith is a leading provider of innovative energy solutions, dedicated to transforming the way we power our world. With a strong commitment to sustainability and cutting-edge technology, we specialize in delivering comprehensive energy services that cater to the evolving needs of our clients. Our team of experts works tirelessly to design, implement, and manage energy systems that are not only efficient but also environmentally responsible. At Hybridsmith, we believe in harnessing the power of innovation to create a brighter, cleaner future for generations to come.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="imageContainer">
                                    <img src={aboutImage} alt="About Us" />
                                </div>
                            </div>
                        </div>

                        <div className="aboutRating" ref={ref}>
                            <div className='aboutRatingContent'>
                                <div className='ratingItem'>
                                    <div className='ratingNumber'>
                                        {inView ? <CountUp end={20} duration={2} /> : 0}%
                                    </div>
                                    <div className='ratingText'>Cost Savings</div>
                                </div>

                                <div className='ratingItem'>
                                    <div className='ratingNumber'>
                                        {inView ? <CountUp end={95} duration={2} /> : 0}%
                                    </div>
                                    <div className='ratingText'>on-time delivery</div>
                                </div>

                                <div className='ratingItem'>
                                    <div className='ratingNumber'>
                                        {inView ? <CountUp end={0} duration={1} /> : 0}%
                                    </div>
                                    <div className='ratingText'>lost-time incidents</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* whyChoose us section */}
                <WhyChooseUS />

                {/* another section here */}

                <div className='aboutbannerSection'>
                    <div className='container'>
                        <div className='aboutbannerContent'>
                            <div className='pageTitle'>We help organizations build dependable teams, streamline logistics, and empower their workforce through accredited training.</div>
                            <div className="bannerLink">
                                <div className="pagesubTitle">
                                    <MdOutlineAddIcCall className="icon" />
                                    <span>Call us to book an appointment:</span>

                                    <div className="text">
                                        <a href="tel:(+234) 807 836 6949">(+234) 807 836 6949</a>
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
    )
}

export default About