import React from 'react';
import './../skills/Skills.css'
import ps from "./../../../images/Group.svg";
import ai from "./../../../images/Group (1).svg";
import ae from "./../../../images/Group (2).svg";
import figma from "./../../../images/Group (3).svg";
import bs from "./../../../images/Star.svg";
import ts from "./../../../images/Star (1).svg";
const Skills = () => {
    return (
        <div className='container'>
            <div className='skill-box'>
                <div className="skill-case">
                <h1 className="skill-title">Skills</h1>
                <p className="skill-subtitle">I work in such programs as</p>
                
                </div>

                <div className="skill-rows">
                <div className="skill-row">
                    <img src={ps} alt="" />
                    <p className='skill-info'>Adobe Photoshop</p>
                    <div className='skill-cont'>
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={ts} alt="" />
                </div>
                </div>



                <div className="skill-row">
                    <img src={ai} alt="" />
                    <p className='skill-info'>Adobe Illustrator</p>
                    <div className='skill-cont'>
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={ts} alt="" />
                    <img src={ts} alt="" />
                </div>
                </div>
                




                 <div className="skill-row">
                    <img src={ae} alt="" />
                    <p className='skill-info'> Adobe After Effects</p>
                    <div className='skill-cont'>
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={ts} alt="" />
                </div>
                </div>



                <div className="skill-row">
                    <img  src={figma} alt="" />
                    <p className='skill-info'> Figma</p>
                    <div className='skill-cont'>
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={bs} alt="" />
                    <img src={ts} alt="" />
                </div>
                 </div>

            </div>
        </div>
        </div>
    );
}

export default Skills;
