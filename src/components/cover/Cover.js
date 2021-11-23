import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'

export const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1>Noe Gonzalez Martinez</h1>
            <p>Hi there, I am a frontend developer</p>
        </div> 
    )
} 
