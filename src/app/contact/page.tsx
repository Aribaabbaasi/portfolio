import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function page () {
  return (
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
    <div className='text-[#ffffff] absolute top-[200px] left-[100px] text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-pink-200 via-blue-600'>Let&apos;s Connect
        <h1 className='text-[#ffffff] absolute top-[70px] text-[20px] w-[500px]'>I&apos;m currently looking for new opportunities,my inbox is always open.Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</h1>
        <FaGithub className='absolute top-[170px]'/>
        <FaLinkedin className='absolute top-[170px] left-[60px]'/>
        <h3 className='shadow-lg shadow-blue-500/100 p-8 rounded-lg absolute top-[10px] left-[-10px] w-[500px] h-[200px]'></h3>
    </div>

    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 rounded-2xl absolute top-[150px] left-[630px] w-[700px]">
      <div className="w-full max-w-lg bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-[35px] font-serif mb-6">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-white border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-blue-500/100 p-8 rounded-lg"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full bg-gray-700 text-white border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-blue-500/100 p-8 rounded-lg"
              placeholder="Enter subject"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-700 text-white border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-blue-500/100 p-8 rounded-lg"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="img-one w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
    </div>


  )
}

export default page