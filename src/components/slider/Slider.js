import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides'
import './Slider.css'

export const Slider = () => (
    <div className='carousel-container'>
        <div className="carousel-title">
            <h3>My proyects</h3>
        </div>
        <Carousel 
            plugins={['arrows']} 
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={300}
            slides={Slides}
        >
        </Carousel>
    </div>
);

