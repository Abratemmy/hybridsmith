import React from 'react';
import './CounterComponent.scss';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterComponent() {
    const { ref, inView } = useInView({
        triggerOnce: true,   // only animate once
        threshold: 0.5,      // 50% of section visible triggers it
    });

    return (
        <div className="homeCounterContainer" ref={ref}>
            <div className="container">
                <div className='counterWrapper'>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={1000} duration={4} /> : 0}+
                        </h2>
                        <p>Professionals deployed across drilling and EPC operations</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={96} duration={3} /> : 0}%
                        </h2>
                        <p>On-time project mobilization</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={30} duration={3} /> : 0}%
                        </h2>
                        <p>Average logistics cost savings for clients</p>
                    </div>

                    <div className='counterItem'>
                        <h2>
                            {inView ? <CountUp end={98} duration={3} /> : 0}%
                        </h2>
                        <p>Incident-free training hours</p>
                    </div>
                    {/* <div className="counterContainer">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CounterComponent