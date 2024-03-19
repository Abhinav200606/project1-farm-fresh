import React from 'react'
import './About.css'
import tomato from '../../assets/tomato.png'
import basket1 from '../../assets/basket1.png'
const About = () => {
  return (
    <div className='about' id='About'>
        <h1> About <span style={{color:'green'}}> Us</span></h1>
        <div className='about-left'>
        < img src={basket1} alt='basket'/>
        <div className='tomato'>
      < img className='img1' src={tomato} alt='tomato'/>
      </div>
      </div>
      <div className='about_text'>
         <p>At Fresh Picks, we believe that everyone deserves convenient access to fresh, high-quality vegetables. Our mission is to bridge the gap between busy schedules and healthy eating by delivering farm-fresh produce directly to your doorstep.<br/><br/>
             With a passion for promoting sustainable agriculture and supporting local farmers, we've curated a selection of the finest seasonal vegetables sourced from trusted farms in your region. From crisp greens to vibrant root vegetables, each item is handpicked to ensure maximum freshness and flavor.<br/><br/>
             What sets us apart is our commitment to transparency and community. We prioritize building relationships with local growers, ensuring fair compensation for their hard work and dedication to sustainable farming practices. By choosing Fresh Picks, you're not only supporting your health but also the livelihoods of farmers in your area.<br/><br/>
          </p>
      </div>
    </div>
  )
}

export default About
