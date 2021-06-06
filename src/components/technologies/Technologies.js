import React from 'react'
import './Technologies.css'

import javascript from '../images/js.png'
import react from '../images/react.png'
import css from '../images/css.png'
import html from '../images/html.png'

export const Technologies = () => {
    return (
        <div className='technologies-container'>

            <h3>Technologies</h3>

            <div className='icons-container'>
                <div className='icons-container__item'>
                    <img src={javascript} alt="javascript" />
                    <p>Javascript</p>
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
                    <img src={html} alt="html" />
                    <p>HTML</p>
                </div>
            </div>

        </div>
    )
}
