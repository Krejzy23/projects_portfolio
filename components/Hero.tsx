'use client'
import React from 'react'
import { HeroParallax } from './ui/HeroParallax'
import { products } from '@/data'

const Hero = () => {
  return (
    <div className=''>
      <HeroParallax products={products}/>
    </div>
  )
}

export default Hero