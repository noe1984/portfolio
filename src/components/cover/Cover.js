import React from 'react'
import './Cover.css'
import backImage from '../images/back-image.jpg'

export const Cover = () => {
    return (
        <div className='cover-container'>
            <div className='cover-container_info'>
                <img src={backImage}/>
                <h1>Noe Gonzalez Martinez</h1>
                <p>Hola, Soy desarrollador Frontend</p>
            </div>
        </div>   
    )
} 
