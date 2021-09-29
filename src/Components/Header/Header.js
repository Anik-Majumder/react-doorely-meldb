import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Doorely</h1>
            </div>
            <div className="header-text">
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Works">Works</a>
                <a href="/Contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;