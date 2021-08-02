import React from 'react'
import './HeroSection.css'
import {Button} from './Button.js'
import video1 from '../videos/background-video-1.mp4';
function HeroSection() {
    return (
        <div className='hero-container'>
         <video src={video1} autoPlay loop muted />
            <h1>Register Now</h1>
            <p>what are you waiting for</p>
            <div className="hero-btns">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                 Get Started
                </Button>

                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                 Watch Trailer    <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
