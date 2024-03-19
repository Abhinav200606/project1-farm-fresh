import React from 'react'
import './Hero.css'
import { GoArrowRight } from "react-icons/go";
const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className='hero-text'>
        <h1>WELCOME TO YOUR HEALTHY WORLD</h1>
        <p>Join us on this journey to explore the colorful and diverse world of vegetables. Let's celebrate the joy of cooking, eating, and living well together!</p>
        <a href='#Available' className='btn'>SHOP NOW < GoArrowRight /></a>
      </div>
    </div>
  )
}

export default Hero
