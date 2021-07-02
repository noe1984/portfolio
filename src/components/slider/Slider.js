import React from 'react';
import './Slider.css'

import image1 from '../images/1.jpg'
import store from '../images/store.jpg'

export const Slider = () => (
    <section id="carousel"  className='mb-3'><br />
        <h1>My Proyects</h1> 
    <div className="carousel__container">

        <div className="carousel__container-item">
            <a href="https://platzi-store-67f72.web.app" target="_blank" rel="noreferrer">
                <div className='card-title'> 
                    <span>Platzi </span><span>Store </span><br />
                    <small>Proyecto basado en hooks <br /> con pagos de prueba a<br />  la API de paypal y conecta <br />con google maps</small>
                </div>
                <img className='carousel__container-item__img' src={store} alt=""/>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <div className='card-title'> <span>Internet </span><span>Las Palmas </span></div>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <div className='card-title'> <span>Internet </span><span>Las Palmas </span></div> 
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <div className='card-title'> <span>Internet </span><span>Las Palmas </span></div>
            </a>
        </div>

        <div className="carousel__container-item">
            <a href="" target="_blank" rel="noreferrer" >
            <img className='carousel__container-item__img' src={image1} alt=""/>
            <div className='card-title'> <span>Internet </span><span>Las Palmas </span></div>
            </a>
        </div>

    </div>
</section>
);

