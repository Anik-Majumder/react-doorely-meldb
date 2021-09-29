import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Welcome to <br /><span>Doorely</span></h1>
                <p>Here you can find the best food you can imagine. So dont wait just order <br /> and get your meal right now. Here you can find the best food you can imagine. So dont wait just order.</p>
            </div>
            <div className="banner-img">
                <img src="https://images.unsplash.com/photo-1609710219611-33446ea1f2ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80" alt="" />
            </div>
        </div>
    );
};

export default Banner;