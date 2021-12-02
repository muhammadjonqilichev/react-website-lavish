import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjTwo } from '../HomePage/Data'

function Services() {
  return (
    <>
      <Pricing/>
      <HeroSection {...homeObjTwo}/>
    </>
  )
}

export default Services
