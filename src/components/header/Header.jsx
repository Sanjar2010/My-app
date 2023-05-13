import React from 'react';
import './../header/Header.css'
import burger from "./../../images/Group 3.svg";

const Header = () => {
    return (
        <div className='container'>
           <div className='header-box'>
            <ul className='header-ul'>
              <a href='/home'><li className="header-li">Home</li></a>  
                <li className="header-li2">About me</li>
                <li className="header-li2">Skills</li>
                <li className="header-li2">Portfolio</li>
                <li className="header-li2">Contacts</li>
            </ul>
            
           </div>
        </div>
    );
}

export default Header;
