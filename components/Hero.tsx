"use client";

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    })
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore, reserve, or lease a vehicle — swiftly and smoothly!
        </h1>

        <p className="hero__subtitle">
          Accelerate your car reservation oomph with our snap trade-satisfaction checkout process.
        </p>

        <CustomButton 
          title="Glimpse your Favorite Rides"
          containerStyles="bg-blue-500 border border-transparent text-white rounded-full mt-10 transition duration-300 ease-in-out hover:bg-transparent hover:text-gray-700 hover:border-gray-700"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="X6M-Notus-Evo0"
            fill className="object-contain" />
          </div>
          
          <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero