import React from 'react'
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <div className='aboutMe-container'>
            <div className="aboutMe-description">
                <h1>About me</h1>
                <p>
                Hi, I am a frontend developer born in Mexico, I can help you build a website,using
                technologies like Javascript, React, HTML and Css. Improve and update old sites to beautiful and interesting ones, 
                in this way improve your commercial or personal brand.
                </p>
            </div>
            <div className="photo-container">
                <img className='photo-container_img' src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="aboutMe" />
            </div>
        </div>
    )
}
