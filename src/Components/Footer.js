import React, { useState } from 'react';
import iconA from "./Assets/icon_facebook.png"
import iconB from "./Assets/icon_instagram.png"
import iconC from "./Assets/icon_twitter.png"
import iconD from "./Assets/icon_mail.png"
import iconE from "./Assets/icon_twitch.png"

const Footer = () => {
    return (
        <div className='footerBase'>
            <div className='footerCont'>
                <div className='adress'>
                    <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
                    <h5>binarcarrental@gmail.com</h5>
                    <h5>081-233-334-808</h5>
                </div>
                <div className='pagelinks'>
                <h5>Our services</h5>
                <h5>Why Us</h5>
                <h5>Testimonial</h5>
                <h5>FAQ</h5>
                </div>
                <div className='connect'>
                <h5>Connect with us</h5>
                    <div className='icons'>
                        <img src={iconA}/>
                        <img src={iconB}/>
                        <img src={iconC}/>
                        <img src={iconD}/>
                        <img src={iconE}/>
                    </div>
                </div>
                <div className='copyright'>
                <h5>Copyright Binar 2022</h5>
                </div>
            </div>
        </div>
    )
};

export default Footer;