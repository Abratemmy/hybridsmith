import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { MdPerson4 } from "react-icons/md";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimony.scss";

export default function TestimonyComponent() {
    return (
        <section className="tst-section">
            <div className="tst-hero">
                <div className="container">
                    <div className="contactContentTop">
                        {/* <div className="titleStroke">Projects</div> */}
                        <div className="pagesubTitle"><span className="border-box"></span>TESTIMONIALS</div>
                        <h2 className="pageTitle">Our Clients spaeak for themselves</h2>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="tst-wrap">
                    <Swiper
                        modules={[Pagination, Autoplay, A11y]}
                        slidesPerView={1.5}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },      // phones
                            750: { slidesPerView: 1.5 },    // tablets
                            1200: { slidesPerView: 1.5 },   // desktops
                        }}
                        className="tst-swiper"
                    >
                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="left">
                                    <div className="image-container">
                                        <MdPerson4 className="icon" />
                                    </div>
                                </div>
                                <div className="tst-right">
                                    <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                    <div className="tst-text">
                                        Our warehouse operations became more efficient and audit-ready thanks to Hybridsmith.
                                    </div>
                                    <div className="tst-name">Logistics Manager</div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="left">
                                    <div className="image-container">
                                        <MdPerson4 className="icon" />
                                    </div>
                                </div>
                                <div className="tst-right">
                                    <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                    <div className="tst-text">
                                        The EPC staff provided were project-ready and integrated seamlessly.
                                    </div>
                                    <div className="tst-name">EPC Contractor</div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="tst-card">
                                <div className="left">
                                    <div className="image-container">
                                        <MdPerson4 className="icon" />
                                    </div>
                                </div>
                                <div className="tst-right">
                                    <div className="tst-quote"><FaQuoteLeft className="icon" /></div>
                                    <div className="tst-text">
                                        The logistics training helped us cut delivery delays significantly.
                                    </div>
                                    <div className="tst-name">Supply Chain Director</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
