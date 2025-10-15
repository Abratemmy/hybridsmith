import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Training from '../Pages/Training/Training';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about_us" caseSensitive={false} element={<About />} />
            <Route exact path="/services" caseSensitive={false} element={<Services />} />
            <Route exact path="/training" caseSensitive={false} element={<Training />} />

        </Routes>
    )
}
export default Router
