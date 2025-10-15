import React from 'react';
import './OtherPagesBanner.scss';
import { NavLink } from 'react-router-dom';

function OtherPagesBanner({ leftText, rightText, otherPagesTextSlide, otherPagesTextSlideSpan }) {
    return (
        <>
            <div className='OtherPagesBanner'>
                <div className="container">
                    <div className="content">
                        <div className="left">{leftText}</div>
                        <div className="right">
                            <NavLink to="/" className="text">Home</NavLink>
                            <div className="line">/</div>
                            <div className="text text2">{rightText}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pageSlidingText">
                <div className="textWrapper">
                    <div className="text">{otherPagesTextSlide} <span>{otherPagesTextSlideSpan}</span></div>
                    <div className="text">{otherPagesTextSlide} <span>{otherPagesTextSlideSpan}</span></div>
                </div>
            </div>
        </>
    )
}

export default OtherPagesBanner