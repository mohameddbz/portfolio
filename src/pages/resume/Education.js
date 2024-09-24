import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from '../../components/ResumeCard'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} 
                animate={{opacity:1 , transition:{duration:.5}}}
                className='w-full py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            <div className='w-full lgl:w-1/2'>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2021 - 2024</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-6 lgl:mt-10  w-full h-[1000px] border-l-[6px] border-black
                                border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Class Preparation in Computer Science"
                        subTitle="University of ESI Alger (2021 - 2023)"
                        result="14/20"
                        des="A foundational course covering programming, algorithms, and data structures, designed to prepare students for advanced studies and careers in tech."
                    />
                    <ResumeCard
                        title="Class in Software Engineering"
                        subTitle="University of ESI Alger (2023 - 2024)"
                        result="12/4"
                        des="A foundational course covering software development, design patterns, and system architecture, preparing students for advanced studies and careers in software engineering."
                    />
                    <ResumeCard
                        title="Growth Program Certification"
                        subTitle="Societe Generale Algerie"
                        result=""
                        des="A specialized certification focused on strategies for scaling businesses, optimizing growth, and improving performance across various industries. The program equips participants with the skills needed to drive sustainable development and innovation."
                    />
                </div>
            </div>
            <div className='w-full lgl:w-1/2'>
                <div className='font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2022 - 2024</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Job Experiences</h2>
                </div>
                <div className='mt-6 lgl:mt-10  w-full h-[1000px] border-l-[6px] border-black
                                border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Full Stack Developer"
                        subTitle="Bank Of Algeria (July 2024) "
                        result="Alger"
                        des="Developed and maintained secure web applications for banking services. Worked on both front-end and back-end, ensuring seamless integration and scalability, while collaborating with teams to deliver efficient solutions."
                    />
                    <ResumeCard
                        title="Bac Operation"
                        subTitle="Esi ALger - (2024 - Present)"
                        result="Alger"
                        des="I had the privilege to be a part of the Help Desk team at Ecole nationale Superieure d'Informatique (ESI), where we supported the Bac operation. This experience offered a unique window into the intricate workings behind the Bac process—from the initial drafting of the circular to the final selection of students' choices and the allocation of academic slots"
                    />
                </div>
            </div>
        </motion.div>
  )
}

export default Education
