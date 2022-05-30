import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Nav.module.scss';

const logo = require('./logo2.png');

export const Nav = () => {
    return (
        <nav className={Style.navBar}>
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/restaurants">RESTAURANTS</Link></li>
                <li><Link to="/home"><img src={ logo } /></Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    )
}