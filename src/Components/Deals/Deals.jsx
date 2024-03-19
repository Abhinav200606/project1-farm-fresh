import React from 'react'
import './Deals.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import delivery1 from '../../assets/delivery1.jpg'
import deal2 from '../../assets/deal2.jpeg'
import deal3 from '../../assets/deal3.jpg'
 
const Deals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    
  return (
    <div className='move' id='Move'>
    <Slider {...settings}>
      <div className='card'>
        <img src={delivery1} alt="Image 1" className="slider-image" />
        <div className='intro'>
          <h1 className='h1'>ORDER NOW TO GET LIFE TIME FREE DELIVERY</h1><br/>
          <a href='#Available' className='bt'>Order now</a>
        </div>
      </div>
      <div className='card'>
        <img src={deal2} alt="Image 2" className="slider-image" />
        <div className='intro'>
          <h1 className='h1'>GET AMAZING FESTIVE OFFERS</h1><br/>
          <a href='#Available' className='bt'>Order now</a>
        </div>
      </div>
      <div className='card'>
        <img src={deal3} alt="Image 3" className="slider-image" />
        <div className='intro'>
          <h1 className='h1'>DISCOVER TREASURES</h1><br/>
          <a href='#Available' className='bt'>Order now</a>
        </div>
      </div>
    </Slider>
    </div>
  );
}

export default Deals
