import React, { useRef } from 'react'
import './Testimonials.css'
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.avif'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
const slideForward = ()=>{
  if(tx>-50){
    tx -=25;
  }
  slider.current.style.transform =`translatex(${tx}%)`
}
const slideBackward = ()=>{
  if(tx< 0){
    tx +=25;
  }
  slider.current.style.transform =`translatex(${tx}%)`
}
  return (
    <div className='testimonials'>
      <h1>What our customers <span style={{color:'green',marginLeft:'10px'}}>say about us</span></h1>
       <button className='next-btn' onClick={slideForward}><FiArrowRight /></button>
       <button className='back-btn' onClick={slideBackward}><FiArrowLeft /></button>
       <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                   <div className='user-info'>
                    <img src={person1} alt="" />
                    <div>
                    <h3>Jackson R</h3>
                    <span>Chennai, India</span>
                   </div>
                   </div>
                   <p>One of the best place to buy fresh fruits and vegetables. All varieties of fruits or vegetables are available here.They are so understanding about the custome business needs and are ever accommodating</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                   <div className='user-info'>
                    <img src={person3} alt="" />
                    <div>
                    <h3>Revathi Kumar</h3>
                    <span>Hyderabad, India</span>
                   </div>
                   </div>
                   <p>Fruits, vegetables.everything is available. People come from all over Hyderabad to pick up farsan from here.We are happy to have partnered with such a amiable yet professional team</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                   <div className='user-info'>
                    <img src={person2} alt="" />
                    <div>
                    <h3>Ravi P</h3>
                    <span>Kochi, India</span>
                   </div>
                   </div>
                   <p>Mostly for south Indian who is residing Matunga area for all types of vegetables. It won't fail to satisfy the customer.It has many varieties of vegetables at one place.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                   <div className='user-info'>
                    <img src={person4} alt="" />
                    <div>
                    <h3>Parvathi K</h3>
                    <span>Chennai, India</span>
                   </div>
                   </div>
                   <p>This is a nice market at Matunga in Chennai. Many shops and street vendors are found here selling fresh fruits and vegetables. Hygiene has to be maintained.</p>
                </div>
            </li>
        </ul>
       </div>
      </div>
  )
}

export default Testimonials
