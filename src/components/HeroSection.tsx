"use client";
import Image from 'next/image'
import Navbar from './Navbar';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>
      <div id='herosection' className='grid grid-cols-1 sm:grid-cols-12'>
       <div className='col-span-7 place-self-center text-center sm:text-left'>
  <Navbar />
      <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold absolute top-[130px] left-[50px]'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-pink-200 via-blue-500'>
          Hello, I&apos;m{" "}
          </span>
          <br></br>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       ' Ariba Abbasi',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web_Developer',
        1000,
        'Fronted_Developer',
        1000,
        'UI/UX_Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '60px', display: 'inline-block' }}
      repeat={Infinity}
    />



      </h1>
      <p className='text-[#AD878E] w-[600px] h-[00px] text-[20px] absolute top-[300px] left-[50px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quia porro aliquam pariatur cupiditate placeat explicabo voluptatum magnam blanditiis, amet, nesciunt quos libero ipsum veritatis neque deleniti molestias fugit tempore!
      </p>
      <div className='absolute top-[450px] left-[60px]'>
          <button className='img-one px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-100 via-blue-500 to-pink-400 hover:bg-slate-800 text-white mt-3'>
            Hire Me
        </button>
          <button className='img-one px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-100 via-blue-500 to-pink-400 hover:bg-slate-800 text-white mt-3'>
        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV</span>
          </button>
      </div>
      </div>
      <div className='col-span-5'>
      <div className='rounded-3xl bg-[#181818] w-[400px] h-[50px] lg:w-[595px] lg:h-[470px] absolute top-[170px] right-[25px]'></div>
        <Image
        src='/hero-image.png'
        alt='hero image'
        className='img-one absolute left-[739px] top-[60px]  rounded-3xl '
        width={590}
        height={550}
        />
      </div>
      </div>
      

       
    </section>

  )
}

export default HeroSection;