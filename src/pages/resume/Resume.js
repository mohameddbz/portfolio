import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Achievement from './Achievement'
import Skills from './Skills'

const Resume = () => {
    const [education , setEducation] = useState(true);
    const [skills , setSkills] = useState(false);
    const [experience , setExperience] = useState(false);
    const [achivement , setAchivement] = useState(false);
  return (
    <section 
            id='resume'
            className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
                <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
                2+ YEARS OF EXPERIENCE
                </h3>
                <h1 className='text-5xl capitalize text-gray-300 font-bold'>
                My Resume
                </h1>
            </div>
        </div>
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <li onClick={() => 
                    setEducation(true) &
                    setSkills(false) &
                    setExperience(false) &
                    setAchivement(false) 
                } className={`${education ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}>
                    Education
                </li>
                <li onClick={() => 
                    setEducation(false) &
                    setSkills(true) &
                    setExperience(false) &
                    setAchivement(false) 
                } className={`${
                    skills ? "border-designColor rounded-lg" : "border-transparent"
                  } resumeLi`}>
                    Professional Skills
                </li>
                <li onClick={() => 
                    setEducation(false) &
                    setSkills(false) &
                    setExperience(true) &
                    setAchivement(false) 
                } className={`${
                    experience
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}>
                    Experience
                </li>
                <li onClick={() => 
                    setEducation(false) &
                    setSkills(false) &
                    setExperience(false) &
                    setAchivement(true) 
                } className={`${
                    achivement
                      ? "border-designColor rounded-lg"
                      : "border-transparent"
                  } resumeLi`}>
                    Achievements
                </li>
            </ul>
        </div>
        {education && <Education/> }
        {skills && <Skills/>}
        {achivement && <Achievement/>}
        {experience && <Experience/> }
    </section>
  )
}

export default Resume
