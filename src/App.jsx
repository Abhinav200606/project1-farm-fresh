import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Products from './Components/Products/Products/'
import Deals from './Components/Deals/Deals'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Testimonials from './Components/Testimonials/Testimonials'
import Ourheros from './Components/Ourheros/Ourheros'
// import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Deals/>
      <About/>
      <Testimonials/>
      <Ourheros/>
      <Contact/>
    </div>
  )
}

export default App
