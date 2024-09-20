import React from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMysql , SiDjango    } from "react-icons/si";

const LeftHome = () => {

    const [text] = useTypewriter({
        words: ['Professional Coder.', 'Full Stack Developer.', 'Software Engineering.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <div className='w-1/2 flex flex-col gap-20' >
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WELCOM TO MY WORLD </h4>
            <h1 className='text-5xl font-bold text-white'>
                Hi, I'am 
                <span className='text-designColor capitalize'> Mohamed Dabouz </span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>
                a <span> {text}</span>
                <Cursor 
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
                My name is Mohamed Amine Dabouz. I am 21 years old, and I live in Algeria. 
                I obtained my baccalaureate degree with excellence and was admitted to the 
                École Nationale Supérieure d'Informatique. I completed my preparatory cycle with 
                good grades while working on various projects in different fields. 
                Now, I am specializing in software engineering, and I am doing my best in 
                this domain by obtaining certifications, gaining experience, participating 
                in various events, and completing multiple internships. In one year, 
                I will graduate as a software engineer.
            </p>
        </div>
       <div className='flex justify-between'>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in 
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'> <FaFacebookF/></span>
                    <span className='bannerIcon'> <FaTwitter/></span>
                    <span className='bannerIcon'> <FaLinkedinIn/></span>
                </div>
            </div>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Best skill on 
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'> <FaReact/></span>
                    <span className='bannerIcon'> <SiTailwindcss/></span>
                    <span className='bannerIcon'> <SiDjango /></span>
                    <span className='bannerIcon'> <SiMysql /></span>
                </div>
            </div>
       </div>
    </div>
  )
}

export default LeftHome
