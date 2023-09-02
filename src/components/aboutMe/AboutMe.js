import React from 'react'
import './AboutMe.css'
import javascript from '../images/js.png'
import react from '../images/react.png'
import css from '../images/css.png'
import html from '../images/html.png'
import bootstrap from '../images/bootstrap.png'
import myImage from '../images/noe.jpg'

export const AboutMe = () => {
    return (
        <div className='aboutMe-container'>

            <div className="aboutMe-description">
                <div className="photo-container">
                    <h2>Acerca de mi</h2> 
                    <img className='photo-container_img' src={myImage} alt="aboutMe" />
                    <p>
                        Puedo ayudarte a construir tu sitio web,
                        mejora o actualiza tu vieja página a una hermosa e interesante y de 
                        esta forma mejora tu marca personal o comercial.
                    </p>
                </div>
            </div> 

            <div className='technologies-container'>
                <h2>Tecnologías</h2> 

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
