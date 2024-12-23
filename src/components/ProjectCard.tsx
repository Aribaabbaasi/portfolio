import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    image: string;
    tags: string[];
}

const ProjectCard: React.FC<propsType> = ({title, desc, image, tags }) => {
  return (
    <div className='img-one border border-blue-700 w-[350px] sm:w-[350px] h-[820px] shadow-lg shadow-blue-500/100 p-3'>
    <div>
      <Image className='img-one w-[300px] sm:w-[350px] h-auto shadow-lg shadow-blue-900/100 p-3'
      src={image}
      width={350}
      height={350}
      alt={title}
      />
      </div>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-400 via-blue-600 '>{title}</div>
        <div className='shadow-lg shadow-blue-500/100 p-3'>{desc}</div>
        <div>
            {tags.map((el) => (
                <div className='tags border border-blue-400 rounded-lg w-[200px] flex justify-between' key={el}>
            <div className='w-fit'>{el}</div>
                </div>))}
        </div>
        </div>

    </div>
  )
}

export default ProjectCard
