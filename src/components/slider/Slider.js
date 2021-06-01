import React from 'react';
import './Slider.css'

import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.png'

export const Slider = () => (
    <section id="carousel"  className='mb-3'><br />
        <h1>My Proyects</h1> 
    <div className="carousel__container">

        <div className="carousel__container-item">
            <a href="https://app-inter.ife.org.mx/siac2011/citas_initCapturaCitas.siac" target="_blank" rel="noreferrer">
            <img className='carousel__container-item__img' src={image1} alt=""/>
            </a>
        </div>
        <div className="carousel__container-item">
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <img className='carousel__container-item__img' src={image2} alt=""/>
            </a>
        </div>
        <div className="carousel__container-item">
            <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank" rel="noreferrer">
            <img className='carousel__container-item__img' src={image3} alt=""/>
            </a>
        </div>
        <div className="carousel__container-item">
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <img className='carousel__container-item__img' src={image2} alt=""/>
            </a>
        </div>
        <div className="carousel__container-item">
            <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank" rel="noreferrer">
            <img className='carousel__container-item__img' src={image3} alt=""/>
            </a>
        </div>
    </div>
</section>
);

