import React from 'react'
import Image from 'next/image'
import Link from 'next/link';



function page () {
  return (

  <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-15 sm:py-16 xl:px-16'>
    <Image src="/About-pic.webp"
     alt='about_me'
      className='img-one rounded-3xl -translate-x-4 absolute top-[200px] ' 
      width={600} 
      height={300} 
      />

<div className='bg-black '>
    <nav className='w-[1021px] h[74px] justify-between pt-14px pr-300px pb-14px pl-300px bg-black font-serif'>
    <div className='bg-[#141414] shadow-lg shadow-blue-400 absolute top-[-0px] right-[0px] bottom-[14px] w-[1462px] h-[95px] justify-between'></div>
     <ul className='w-[339px] h-[15px] gap-25px lg:gap-5 top-[40px] right-[330px] absolute text-[13px] flex md:flex'>
        <h1 className='text-[55px] font-extrabold absolute top-[-30px] right-[790px] underline'>LOGO</h1>
    <Link className='img-one menuLink text-[30px] font-extrabold hover:text-[#3f7391] hover:underline' href="/home">Home</Link>
    <Link className='img-one menuLink text-[30px] font-extrabold hover:text-[#3f7391] hover:underline' href="/about">About</Link>
    <Link className='img-one menuLink text-[30px] font-extrabold hover:text-[#3f7391] hover:underline' href="/skills">Skills</Link>
    <Link className='img-one menuLink text-[30px] font-extrabold hover:text-[#3f7391] hover:underline' href="/projects">Projects</Link>
    <Link className='img-one menuLink text-[30px] font-extrabold hover:text-[#3f7391] hover:underline' href="/contact">Contact</Link>
    </ul>
    </nav>
    </div>
      

    <div >
        <h2 className='text-6xl absolute top-[250px] left-[770px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-pink-200 via-blue-600 no-underline hover:underline'>
            About Me</h2>
        <p className='text-base lg:text-lg absolute top-[400px] left-[700px] w-[600px]'>
        I am a dedicated and versatile professional with a strong background in web development, UI/UX design, and frontend development. I specialize in creating user-friendly, visually appealing, and responsive websites that provide seamless user experiences. Alongside my technical expertise, I am currently pursuing an LLB degree to broaden my knowledge and explore opportunities in the legal field. My passion for learning and problem-solving drives me to excel in both technology and law, allowing me to deliver innovative and impactful solutions.
        </p>
    </div>
    </div>
    </section>
  )

}

export default page;
