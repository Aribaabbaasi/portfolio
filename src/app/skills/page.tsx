"use client";

import React, { useTransition, useState } from 'react'
import TabButton from '@/components/TabButton';
import Link from 'next/link';


const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li className='absolute top-[340px] left-[300px] font-serif border-y-2 border-x-7 rounded-md text-[30px] rotate-12 shadow-lg shadow-blue-500/100 p-3'>Web-Developer</li>
                <li className='absolute top-[560px] left-[240px] font-serif border-y-2 border-x-7 rounded-md text-[30px] -rotate-12 shadow-lg shadow-blue-500/100 p-3'>Fronted-Developer</li>
                <li className='absolute top-[340px] left-[800px] font-serif border-y-2 border-x-7 rounded-md text-[30px] -rotate-12 shadow-lg shadow-blue-500/100 p-3'>UI/UX-Developer</li>
                <li className='absolute top-[450px] left-[499px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3'>Node.js</li>
                <li className='absolute top-[450px] left-[630px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3'>Html</li>
            <li className='absolute top-[450px] w-[100px] left-[730px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3'>CSS</li>
                <li className='absolute top-[560px] left-[820px] font-serif border-y-2 border-x-7 rounded-md text-[30px] rotate-12 shadow-lg shadow-blue-500/100 p-3'>Type-Script</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li className="absolute top-[320px] left-[50px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3">Matricullar: The New Beacon Academy School Hyderabad</li>
                <li className="absolute top-[430px] left-[390px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3">Intermediate: Excellence Education System Girls Collage Hyderabad</li>
                <li className='absolute top-[550px] left-[50px] font-serif border-y-2 border-x-7 rounded-md text-[30px] shadow-lg shadow-blue-500/100 p-3'>Informtion Technology Course: Governor House Karachi, Sindh</li>
            </ul>
        )
    }
]

function Page () {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id.toString());
        });
    }

  return <section className='text-white'>
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
        <div className='img-one flex flex-row mt-6 text-center absolute top-[150px] w-[210px] left-[440px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-400 via-blue-600 text-[50px] px-6 py-2 border-y-2 border-x-7 rounded-lg shadow-lg shadow-blue-500/100 p-3 underline'>
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}
            > 
             {" "}
            Skills{" "} 
            </TabButton>
    
            </div>

                <div className='img-one flex flex-row mt-6 text-center absolute top-[150px] left-[650px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-400 via-blue-600 text-[50px] px-6 py-2 border-y-2 border-x-7 rounded-lg shadow-lg shadow-blue-500/100 p-3'>
            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}
            > 
             {" "}
            Education{" "} 
            </TabButton>
        </div>

        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}
    </div>
  </section>
}

export default Page;

