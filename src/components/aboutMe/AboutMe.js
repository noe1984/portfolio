import React from 'react'
import './AboutMe.css'
import javascript from '../images/js.png'
import react from '../images/react.png'
import css from '../images/css.png'
import html from '../images/html.png'
import bootstrap from '../images/bootstrap.png'

export const AboutMe = () => {
    return (
        <div className='aboutMe-container'>

            <div className="aboutMe-description">

                <h2>About me</h2>
                <div className="photo-container">
                    <img className='photo-container_img' src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="aboutMe" />
                </div>
                
                <p>
                Hi, I am a frontend developer born in Mexico, I can help you build a website,using
                technologies like Javascript, React, HTML and Css. Improve and update old sites to beautiful and interesting ones, 
                in this way improve your commercial or personal brand.
                </p>

            </div>

            <div className='technologies-container'>

                <h2>Technologies</h2>

                <div className='icons-container'>
                    <div className='icons-container__item'>
                        <img src={javascript} alt="javascript" />
                        <p>Javascript</p>
                    </div>

                    <div className='icons-container__item'>
                        <img src={html} alt="html" />
                        <p>HTML</p>
                    </div>
                    
                    <div className='icons-container__item'>
                        <img src={react} alt="reac" />
                        <p>React</p>
                    </div>

                    <div className='icons-container__item'>
                        <img src={css} alt="css" />
                        <p>Css</p>
                    </div>


                    <div className='icons-container__item'>
                        <img src={bootstrap} alt="html" />
                        <p>Bootstrap</p>
                    </div>
                </div>

            </div>

        </div>
    )
} 
