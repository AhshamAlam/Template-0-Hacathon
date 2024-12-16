import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Filter from './Filter'
import Products from './Products'
import Return from './Return'


export default function Shop() {
  return (
    <div>
      <Navbar/>
      <HeroSection/> 
      <Filter/>
      <Products/>
      <Return/>   
    </div>
  )
}
