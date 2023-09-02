import React from 'react';
import './Slider.css'
import { Info } from '../info/Info'
import compu from '../images/1.jpg'
import gamer from '../images/gamer.jpg'
import rick from '../images/rick-and-morty.jpg' 

const slides = [
    {
        link:'https://noe1984.github.io/palmas/',
        title:'Las Palmas',
        info:'Pagina para un negocio de renta y venta de computadoras hecha con bootstrap',
        image:gamer,
    },
    {
        link:"https://noe1984.github.io/rick-and-morty/",
        title:'Rick and Morty',
        info:'Proyecto responsive design, que conecta a la api de Rick and Morty con hooks',
        image:rick,
    },
    {
        link:"",
        title:'New Project',
        info:'Este sera un nuevo proyecto, Este sera un nuevo proyecto, Este sera un nuevo proyecto,',
        image:compu,
    },
    {
        link:"",
        title:'New Project',
        info:'Este sera un nuevo proyecto, Este sera un nuevo proyecto, Este sera un nuevo proyecto,',
        image:compu,
    },
    {
        link:"",
        title:'New Project',
        info:'Este sera un nuevo proyecto, Este sera un nuevo proyecto, Este sera un nuevo proyecto,',
        image:compu,
    } 
] 

const SlideCard = () => (slides.map((slide) => (
    <div className="carousel__container-item">
        <a href={slide.link} target="_blank" rel="noreferrer">
        <div className='card-title'> 
            <span>{slide.title}</span>
            <p>{slide.info}</p>
        </div>
        <img className='carousel__container-item__img' src={slide.image} alt=""/>
        </a> 
    </div> 
))) 

const Slider = () => (
    <section id="carousel"  className='mb-3'> 
        <h1>Mis Proyectos</h1> 
        <div className="carousel__container"> 
            <SlideCard /> 
        </div>
        <Info />
    </section >
)

 export { Slider }

