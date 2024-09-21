import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projectOne, projectThree, projectTwo , projectFour , projectFive ,projectSixe } from "../../assets/index";

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
                title="My Portfolio"
                des="Check out my portfolio to see a collection of my projects. Each one showcases my skills in web development, highlighting my creativity and problem-solving abilities."
                src={projectOne}
            />
            <ProjectCard
                title="Intelligent Search for Scientific Articles"
                des="Intelligent search for scientific articles uses elasticSearch to streamline access to relevant publications, helping researchers quickly find the information they need."
                src={projectTwo}
            />
            <ProjectCard
                title="ArchiMind"
                des="We developed an interactive tool to improve learning in computer architecture and assembly language,
                 ensuring students receive quality education that aligns with the fast-paced changes in computer science."
                src={projectThree}
            />
            <ProjectCard
                title="ESI Website"
                des="the ESI website, your gateway to our computer science programs and resources, featuring opportunities for student engagement and research."
                src={projectFour}
            />
            <ProjectCard
                title="SOCIAL MEDIA App"
                des=" our social media platform, where you can connect, share, and engage with friends and communities. Discover new content, express yourself, and stay updated with the latest trends."
                src={projectFive}
            />
            <ProjectCard
                title="Instagram Clone "
                des="Instagram clone, a platform for sharing photos and videos, connecting with friends, 
                and discovering new content. Enjoy features like filters, stories, and personalized feeds to express your creativity and stay engaged!"
                src={projectSixe}
            />
        </div>

    </section>
  )
}

export default Projects
