import React from 'react';
import './Slider.css'
import { Info } from '../info/Info'

import image1 from '../images/1.jpg'
import store from '../images/store.jpg'
import pet from '../images/perro.jpg'
import gamer from '../images/gamer.jpg'
import rick from '../images/rick-and-morty.jpg' 

export const Slider = () => ( 
    <section id="carousel"  className='mb-3'> 
            <h1>Mis Proyectos</h1> 
        <div className="carousel__container">
            
            <div className="carousel__container-item">
                <a href="https://petgram-6a000.web.app/" target="_blank" rel="noreferrer">
                    <div className='card-title'> 
                        <span>Petgram </span><br />
                        <small>PWA a base de graphql<br />styled components<br />y service worker<br /> con workbox de google</small>
                    </div>
                    <img className='carousel__container-item__img' src={pet} alt=""/>
                </a>
            </div> 

             
            <div className="carousel__container-item">
                <a href="https://noe1984.github.io/palmas/" target="_blank" rel="noreferrer">
                    <div className='card-title'> 
                        <span>Las palmas</span><br />
                        <small>Pagina para un <br /> negocio de renta<br />y venta de compus<br /> hecha con bootstrap</small>
                    </div>
                    <img className='carousel__container-item__img' src={gamer} alt=""/>
                </a>
            </div>

            <div className="carousel__container-item">
                <a href="https://store-fe5f5.web.app/" target="_blank" rel="noreferrer">
                    <div className='card-title'> 
                        <span>Platzi </span><span>Store </span><br />
                        <small>Proyecto con hooks<br /> con pagos de prueba<br />a la API de paypal que <br />conecta con google maps</small>
                    </div>
                    <img className='carousel__container-item__img' src={store} alt=""/>
                </a>
            </div>

            <div className="carousel__container-item"> 
                <a href="https://noe1984.github.io/rick-and-morty/" target="_blank" rel="noreferrer">
                    <div className='card-title'> 
                        <span>Rick and Morty</span><br />
                        <small>Proyecto responsive <br />design, que conecta a la <br />api de Rick and Morty<br />con hooks</small>
                    </div>
                    <img className='carousel__container-item__img' src={rick} alt=""/>
                </a>
            </div>

            <div className="carousel__container-item">
                {/* <a href="" target="_blank" rel="noreferrer" > */}
                <img className='carousel__container-item__img' src={image1} alt=""/>
                <div className='card-title'> <span>Future </span><span>Proyect</span></div>
                {/* </a> */} 
            </div>
        </div>
            <Info />
    
    </section>
);

