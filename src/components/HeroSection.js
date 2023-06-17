import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Shivansh Rastogi</h1>
      <p>T-AIM NASSCOM Capgemini Hackathon Winner</p>
      <p>MERN Stack Developer and ML Enthusiast</p>
      <p>CGPA - 9.03</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Resume
        </Button>
{/* 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LinkedIn <i class="fa fa-linkedin-square"></i>
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
