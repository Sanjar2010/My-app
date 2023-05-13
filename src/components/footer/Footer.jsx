import React from 'react';
import './../footer/Footer.css'
import a from "./../../../src/images/a.svg";
import b from "./../../../src/images/5.svg";
import c from "./../../../src/images/6.svg";
import d from "./../../../src/images/7.svg";
const Footer = () => {
    return (
        <div className='container'>
            <div className="footer-cont">
            <div className='footer-box'>
            <h1 className='footer-title'>Contacts</h1>
            <p className='footer-subtitle'>Want to know more or just chat? You are welcome!</p>
            <button className='footer-btn'>Send message</button>
            </div>

            <div className="footer-case">
                <div className='footer-icons'>
                    <img src={a} alt="" />
                    <img src={b} alt="" />
                    <img src={c} alt="" />
                    <img src={d} alt="" />
                </div>
<a className='a'>                Like me on LinkedIn, Instagram, Behance, Dribble</a>
            </div>
            </div>

        </div>
    );
}

export default Footer;
