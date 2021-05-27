import React from 'react'
import './Footer.css'


export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-info">
                <h1>Noe Gonzalez</h1>
                <p>Based in Tijuana, Mexico</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                 <p>let's start working</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by Noe
                </div>
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
        </div>
    )
}
