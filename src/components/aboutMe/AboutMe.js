import React from 'react'
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <div className='aboutMe-container'>
            <div className="aboutMe-description">
                <h3>Let me tell you about me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt assumenda autem aliquam dolorem repellendus quo obcaecati, laboriosam dignissimos totam optio doloremque impedit alias, perferendis possimus consequatur quasi quam. Quis, mollitia.</p>
            </div>
            <div className="aboutMe-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="aboutMe" />
            </div>
        </div>
    )
}
