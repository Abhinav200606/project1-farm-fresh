import React from 'react'
import './Contact.css'
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eaf3b957-40dd-42e9-86f0-6eab9d18fb54");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className='contact' id='Contact'>
        {/* <h1>Get in <span style={{color:'green'}}> Touch</span></h1> */}
      <div className='contact-col'>
         <h3>Send us a message<span className='ms'><HiOutlineMailOpen/></span></h3>
         <p>Leave us your details below and we’ll get in touch with you</p>
         <ul>
            <li><span className='ms1'><HiOutlineMail/></span>Farmfresh@contactus.com</li>
            <li><span className='ms1'><FaPhone /></span>044-9944332</li>
            <li><address><span className='ms1'><FaLocationDot /></span>76 Kattupakam Ave, Chennai<br/>60056, Tamil Nadu</address></li>
         </ul>
         <div>
          <h4>Follow us on</h4>
          <ul style={{display:'flex',fontSize:'30px'}}>
            <li><a href='https://www.instagram.com/'><GrInstagram /></a></li>
            <li ><a style={{padding:'20px'}} href='https://www.facebook.com/'><ImFacebook2 /></a></li>
            <li><a href='https://twitter.com/?lang=en'><BsTwitterX /></a></li>
          </ul>
         </div>
      </div>
      <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
