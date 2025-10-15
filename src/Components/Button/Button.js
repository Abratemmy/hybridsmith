import React from 'react'
import { NavLink } from 'react-router-dom';
import './Button.scss'

function Button({ text, goTo, design2 }) {
    return (
        <div className='pageButton'>
            <NavLink to={goTo} className={design2 ? ' buttonText2 buttonText' : 'buttonText'}>{text}</NavLink>
        </div>
    )
}

export default Button