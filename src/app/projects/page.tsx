import React from 'react'
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';


const data = [
  {
    id: 1,
    title: "Dynamic Resume By Ariba Abbasi",
    desc: "An interactive resume showcasing Ariba Abbasi’s skills in frontend development, certifications, and career achievements.",
    image: "/Image.2.jpg",
    tags: ["Html", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Static Resume By Ariba Abbasi",
    desc: "A customizable resume builder interface by Ariba Abbasi, allowing users to generate and share their resumes with editable fields and a download option.",
    image: "/Image.3.jpg",
    tags: ["Html", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Website By Ariba Abbasi",
    desc: "A dynamic website interface for a Web Design & Development course, featuring login functionality and a call-to-action for users to join and enhance their tech skills.",
    image: "/Image.1.jpg",
    tags: ["Html", "CSS"],
  },
  {
    id: 4,
    title: "Potfolio By Ariba Abbasi",
    desc: "This potfolio highlights Ariba Abbasi's skills and expertise in web development using technologies like Node.js, HTML, Tailwind CSS, and TypeScript. It is designed to showcase her personal and professional achievements.",
    image: "/Image.4.jpeg",
    tags: ["Node.js", "Html", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Website By Ariba Abbasi",
    desc: "This is a professional furniture website created with Node.js, HTML, Tailwind CSS, Custom CSS, and TypeScript. It focuses on displaying a modern furniture collection with a clean and responsive design.",
    image: "/Image.5.jpeg",
    tags: ["Node.js", "Html", "Tailwind CSS", "Custom CSS", "TypeScript"],
  },
];

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
<div id='projects' className='container pt-33 absolute top-[200px]'>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el) => (<ProjectCard
      key={el.id}
      title={el.title}
      desc={el.desc}
      image={el.image}
      tags={el.tags}
      />))}
    </div>
  </div>
  </div>
      
    
    
  )
}

export default page






    