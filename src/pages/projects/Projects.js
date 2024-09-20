import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projectOne } from "../../assets/index";

const Projects = () => {
  return (
    <section 
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center text-center'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
                <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
                VISIT MY PROJECTS AND KEEP YOUR FEEDBACK
                </h3>
                <h1 className='text-5xl capitalize text-gray-300 font-bold'>
                My Projects
                </h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
            <ProjectCard
                title="SOCIAL MEDIA CLONE"
                des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                src={projectOne}
            />
        </div>

    </section>
  )
}

export default Projects
