import React from 'react'
import OtherPagesBanner from '../../Components/OtherPagesBanner/OtherPagesBanner'
import Button from '../../Components/Button/Button';
import './ErrorPage.scss'

function ErrorPage() {
    return (
        <div>
            <OtherPagesBanner
                leftText="The Page you're looking for does not exist"
                rightText="Error 404"
                otherPagesTextSlide="The page does not"
                otherPagesTextSlideSpan="exist"
            />

            <div className="Error404Container">
                <div className="container">
                    <div className="pagesubTitle">Error 404</div>
                    <h2 className="pageTitle">This is Error <span>404 Page</span></h2>



                    <div className="errorBtn">
                        <Button
                            text="Go To Home"
                            goTo="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage