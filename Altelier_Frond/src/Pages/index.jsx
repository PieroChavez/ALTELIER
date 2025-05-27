import React from 'react'
import TestimonialCarousel from '../Components/Person/Testimoniales'
import { HeaderNavUno } from '../assets/HeaderNav/HeaderNav'
import HeaderUno from '../Components/Header/HeaderUno'
import HeaderNav from '../Components/Header/HeaderNav'
import HeaderScroll from '../Components/Header/HeaderScroll'
import HeaderHome from '../Components/Header/HeaderHome'


const index = () => {
  return (
    <div> 
      <HeaderNav/> 
      <HeaderScroll/>
      <HeaderHome/>
      
           
  
    <TestimonialCarousel/>
      
    </div>
  )
}

export default index
