import React from 'react'
import './Ourheros.css'
const Ourheros = () => {
  return (
    <div className='container1' id='Container1'>
        <h1>Our <span className='a' style={{color:'green',marginLeft:'10px'}}><br/>Heros</span></h1>
      <div className="gallery">
        <div className="img-box"><h3>Our farmers work tirelessly to cultivate the land and produce the food that sustains our communities.</h3></div>
        <div className="img-box"><h3>Our farmers, the unsung heroes of our nation, toil day and night to feed our families and fuel our economy.</h3></div>
        <div className="img-box"><h3>Through their unwavering commitment to the land and their communities, our farmers stand as shining examples of heroism.</h3></div>
        <div className="img-box"><h3>As we sit down to our meals, let's not forget to thank our farmers, the silent heroes who make it all possible.</h3></div>
      </div>
    </div>
  )
}

export default Ourheros
