import React from 'react';
import './../section/Section.css'
import denis from './../../../images/BSPP2266.svg'
import burger from "./../../../images/Group 3.svg";
const Section = () => {
    return (
        <div className='container'>
            <div className='section-case'>
                <div className="section-inforamtion">
                    <div className='section-box' id='section-box'>
                        <h1 className='section-title'>Denis Novik</h1>
                    <div className='section-text'>
                        <p className='section-subtitle'>UX | UI designer 24 years old, Minsk</p>
                        <div className='section-div'>
                        <p className='section-info'>RU | ENG</p>
                    </div>
                </div>
            </div>
            <img src={burger} alt="" />










            </div>

          
          
          

</div>
<div className='section-box2'>
<img className='img' src={denis} alt="" />
</div>
        </div>
    )
}

export default Section;
