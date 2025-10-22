import React, { useState, useEffect } from 'react'
import './Contact.scss';
import { FaLocationPinLock } from "react-icons/fa6";
import { MdWifiCalling1, MdAttachEmail } from "react-icons/md";
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    // const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            offset: 100, // offset (in px) from the original trigger point
        });
        AOS.refresh();
    }, []);

    const initialValue = {
        fullName: "",
        message: "",
        email: "",
        phoneNumber: ""
    }
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };


    // handle errors
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a message";
        if (!targets.phoneNumber) errorsValue.phoneNumber = "Type  a phoneNumber";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const submitForm = async (ev) => {
        ev.preventDefault();
        let v = handleError(values);

        if (v > 0) {
            toast.error('All fields are required')
            setLoading(false);
        } else {
            setLoading(true);
            emailjs
                .send(
                    "service_v0zuw35",
                    "template_x8o0j4a",
                    values,
                    "b8v2BfbaPC-BRh2Dh"
                )
                .then(
                    () => {
                        setLoading(false)
                        toast.success('Your request has been sent successfully');
                        setValues({
                            fullName: "",
                            email: "",
                            phoneNumber: "",
                            message: '',
                        });
                    },
                    (error) => {
                        setLoading(false)
                        toast.error('Ohpps! Your request is not submitted')
                        console.error("Email send failed:", error.text);
                    }
                );
        }

    };




    return (
        <div>
            <OtherPagesBanner
                leftText="Let’s move your operations forward."
                rightText="Contact Us"
                otherPagesTextSlide="Let's connect today to get"
                otherPagesTextSlideSpan="started"
            />
            <div className="contactContainer">
                <div className="container">
                    <div className="pagesubTitle">Contact</div>
                    <div className="pageTitle"><span className="border-box"></span>GET IN TOUCH</div>
                    <h2 className="pageText">Whether you need manpower, logistics optimization, or accredited training, our team is ready to deliver.</h2>


                    <div className="contactCardContainer">
                        <div className='row g-3'>
                            <div className='col-md-4'>
                                <div className="contactCard" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <FaLocationPinLock className='icon' />
                                        </div>
                                        <h3>Head Office</h3>
                                        <p>39 Alfred Rewane road, Ikoyi, Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="contactCard" data-aos="fade-up" data-aos-duration="1100">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <MdWifiCalling1 className='icon' />
                                        </div>
                                        <h3>Our Phone</h3>
                                        <p><a href="tel:(+234) 901 882 1570">(+234) 901 882 1570</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="contactCard" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="content">
                                        <div className="iconDiv">
                                            <MdAttachEmail className='icon' />
                                        </div>
                                        <h3>Our Email</h3>
                                        <p><a href="mailTo:info@hybridsmith.com">info@hybridsmith.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* another session here */}
                    <div className='row g-3' style={{ padding: '60px 0px  30px' }}>

                        <div className="col-lg-2 col-md-12 col-sm-12"></div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className='contact-formdetails pageForm'>
                                <form

                                    onSubmit={submitForm}
                                >
                                    <div className='row'>
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_subject" value="New Contact Form Submission!" />


                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="formGroup">
                                                <label>First Name <span>*</span></label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={values.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                />
                                                {errors.fullName && <span className="error">{errors.fullName}</span>}

                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="formGroup">
                                                <label>Phone Number <span>*</span></label>
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    value={values.phoneNumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Phone Number"
                                                />
                                                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="formGroup">
                                                <label>Email<span>*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Email"
                                                />
                                                {errors.email && <span className="error">{errors.email}</span>}

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="formGroup">
                                                <label>Message <span>*</span></label>

                                                <textarea
                                                    type="message"
                                                    name="message"
                                                    value={values.message}
                                                    onChange={handleChange}
                                                    placeholder="Message"
                                                    rows={5}
                                                />
                                                {errors.message && <span className="error">{errors.message}</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            {loading ? <>
                                                <button type="submit" value="Submit" className="submitBtn submitDefault" >
                                                    <span className="spinner-grow spinner-grow-sm text-info" role="status" style={{ marginRight: '10px' }}>
                                                    </span>
                                                    Submitting...
                                                </button>
                                            </> :
                                                <button type="submit" value="Submit" className="submitBtn" >Submit</button>
                                            }
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact