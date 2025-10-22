import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./TrainingForm.scss";
import { ToastContainer, toast } from 'react-toastify';

const TrainingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        training: "",
        date: "",
        mode: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    // Get today's date in YYYY-MM-DD format to disable past dates
    const today = new Date().toISOString().split("T")[0];

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.training) newErrors.training = "Please select a training";
        if (!formData.date) newErrors.date = "Select a preferred date";
        if (!formData.mode) newErrors.mode = "Please choose training type";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true)
        emailjs
            .send(
                "service_v0zuw35",
                "template_67i5x4l",
                formData,
                "b8v2BfbaPC-BRh2Dh"
            )
            .then(
                () => {
                    setLoading(false)
                    setShowModal(true);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        training: "",
                        date: "",
                        mode: "",
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false)
                    toast.error('Ohpps! Your request is not submitted')
                    console.error("Email send failed:", error.text);
                }
            );
    };

    return (
        <div className="">
            <form className="pageForm" onSubmit={handleSubmit}>

                <div className="formGroup">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                <div className="formGroup">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className="formGroup">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="formGroup">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>

                <div className="formGroup">
                    <label>Please select your interested training</label>
                    <select name="training" value={formData.training} onChange={handleChange}>
                        <option value="">-- Select Training --</option>
                        <option>Logistics & Operational Excellence</option>
                        <option>Technical & Engineering Training</option>
                        <option>Safety & Compliance</option>
                        <option>Management & Governance</option>
                    </select>
                    {errors.training && <span className="error">{errors.training}</span>}
                </div>

                <div className="formGroup">
                    <label>Preferred Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today} // prevents selecting past dates
                    />
                    {errors.date && <span className="error">{errors.date}</span>}
                </div>

                <div className="formGroup">
                    <label>Training Type</label>
                    <select name="mode" value={formData.mode} onChange={handleChange}>
                        <option value="">-- Select Type --</option>
                        <option>Physical Class</option>
                        <option>Online Class</option>
                    </select>
                    {errors.mode && <span className="error">{errors.mode}</span>}
                </div>

                <div className="formGroup">
                    <label>Message</label>

                    <textarea
                        type="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message (optional)"
                        rows={5}
                    />

                </div>

                <button type="submit" className={loading ? "submitBtn submitDefault" : 'submitBtn'}>
                    {loading ? 'Submitting ...' : 'Submit Request'}
                </button>
            </form>
            <ToastContainer />

            {/* ✅ Success Modal */}
            {showModal && (
                <div className="modalOverlay" onClick={() => setShowModal(false)}>
                    <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                        <h3>🎉 Thank You!</h3>
                        <p>Your training request has been sent successfully.</p>
                        <button className="closeBtn" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrainingForm;
