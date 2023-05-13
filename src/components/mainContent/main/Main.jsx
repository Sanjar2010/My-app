import React from 'react';
import './../main/Main.css'
import first from "./../../../images/1.svg";
import second from "./../../../images/2.svg";
import third from "./../../../images/1.svg";
const Main = () => {
    return (
        <div className='container'>
            <div className='main-box'>
                <h1 className=''>Portfolio</h1>
                <div className="first-box">
                <div className='first-case'>
<img src={first} alt="" />
<a href="">Online fashion store - Homepage</a>
                </div>




                <div className='first-case'>
<img src={second} alt="" />
<a href="">Online fashion store - Homepage</a>
                </div>




                <div className='first-case'>
<img src={third} alt="" />
<a href="">Online fashion store - Homepage</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
