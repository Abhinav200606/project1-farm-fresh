import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import './Products.css'
import veg1 from '../../assets/veg1.png'
import veg2 from '../../assets/veg2.png'
import veg3 from '../../assets/veg3.png'
import veg4 from '../../assets/veg4.png'
import veg5 from '../../assets/veg5.png'
import veg6 from '../../assets/veg6.png'
import veg7 from '../../assets/veg7.png'
import veg8 from '../../assets/veg8.png'
const products = () => {
  return (
    <div className='available' id='Available'>
        <div>
      <h1>Explore Our <span style={{color:'green'}}>Products</span></h1>
      </div>
      <div className='av_box'>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg1} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Tomato</h2>
                <h3>₹20</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStarHalfStroke /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg2} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Carrot</h2>
                <h3>₹80</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg3} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Cabbage</h2>
                <h3>₹30</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStarHalfStroke /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg4} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Cucumber</h2>
                <h3>₹40</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg5} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Ladyfinger</h2>
                <h3>₹60</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg6} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Green chilli</h2>
                <h3>₹100</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStarHalfStroke /></i>
                 <i><FaStarHalfStroke /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg7} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Spinach</h2>
                <h3>₹20</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStarHalfStroke /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        <div className='av_card'>
            <div className='av_image'>
                <img src={veg8} alt='veg'/>
            </div>
            <div className='av_info'>
                <h2>Garlic</h2>
                <h3>₹280</h3>
                <div className='av_icon'>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                 <i><FaStar /></i>
                </div>
                <a href='#' className='av_btn'>Add to cart</a>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default products
