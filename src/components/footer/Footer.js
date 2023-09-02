import React from 'react'
import './Footer.css'


export const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-info">
                <h1>Noe Gonzalez</h1> 
                <p>Estoy en Tijuana,</p><p>Mexico</p>
            </div>

            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>Comencemos a trabajar</p> 

                <div className="sns-links">
                    <a href="https://mx.linkedin.com/" target='_blank' rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://twitter.com/?lang=es" target='_blank' rel='noreferrer'>
                        <i className='fab fa-twitter twitter'></i>
                    </a>
                    <a href="https://es-la.facebook.com/" target='_blank' rel='noreferrer'>
                        <i className='fab fa-facebook facebook'></i>
                    </a>
                </div>
            </div>

            <div className="footer-sns">
                <div className="design-by">
                    Diseñado por Noe
                </div>
            </div>

        </div>
    )
}
