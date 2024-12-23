import React from 'react'
import ProjectCard from './ProjectCard';


const data = [
  {
    id: 1,
    title: "Static Resume By Ariba Abbasi",
    desc: "An interactive resume showcasing Ariba Abbasi’s skills in frontend development, certifications, and career achievements.",
    image: "/Image.2.jpg",
    tags: ["Html", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Dynamic Resume By Ariba Abbasi",
    desc: "A customizable resume builder interface by Ariba Abbasi, allowing users to generate and share their resumes with editable fields and a download option.",
    image: "/Image.3.jpg",
    tags: ["Html", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Website",
    desc: "A dynamic website interface for a Web Design & Development course, featuring login functionality and a call-to-action for users to join and enhance their tech skills.",
    image: "/Image.4.jpg",
    tags: ["Html", "CSS"],
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "",
    image: "/Image.4.jpeg",
    tags: ["Node.js", "Html", "Tailwind CSS", "TypeScript"],
  },
];

const ProjectsSection = () => {
  return (
    <div id='projects' className='container pt-33 '>
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
      
    
    
  )
}

export default ProjectsSection
