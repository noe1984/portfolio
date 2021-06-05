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
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <p className='card-title'>Internet Las Palmas</p>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <p className='card-title'>Internet Las Palmas</p>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <p className='card-title'>Internet Las Palmas</p>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <p className='card-title'>Internet Las Palmas</p>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <p className='card-title'>Internet Las Palmas</p>
            </a>
        </div>

    </div>
</section>
);

