import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from '../../components/ResumeCard'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} 
                animate={{opacity:1 , transition:{duration:.5}}}
                className='w-full py-12 font-titleFont flex flex-col lgl:flex-row gap-10'>
            <div>
                <div className='lgl:py-12 flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-6 lgl:mt-10  w-full h-[1000px] border-l-[6px] border-black
                                border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="BSc in Computer Science"
                        subTitle="University of DVI (2006 - 2010)"
                        result="3.90/4"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <ResumeCard
                        title="BSc in Computer Science"
                        subTitle="University of DVI (2006 - 2010)"
                        result="3.90/4"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <ResumeCard
                        title="BSc in Computer Science"
                        subTitle="University of DVI (2006 - 2010)"
                        result="3.90/4"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                </div>
            </div>
            <div>
                <div className='lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2010 - 2022</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Job Experiences</h2>
                </div>
                <div className='mt-6 lgl:mt-10  w-full h-[1000px] border-l-[6px] border-black
                                border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />
                    <ResumeCard
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />
                    <ResumeCard
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />
                </div>
            </div>
        </motion.div>
  )
}

export default Education
