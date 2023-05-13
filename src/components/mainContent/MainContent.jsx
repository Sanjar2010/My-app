import React from 'react';
import AboutMe from './aboutMe/AboutMe';
import Main from './main/Main';
import Section from './section/Section';
import Skills from './skills/Skills';



const MainContent = () => {
    return (
        <div className='container'>
        
        <Section />
        <AboutMe/>
        <Skills/>
        <Main/>
</div>
        
    );


   
}

export default MainContent;
