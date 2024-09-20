import React from 'react'
import Card from '../../components/Card'
import { AiFillAppstore } from "react-icons/ai";

const Features = () => {
  return (
    <section 
      id='features' 
      className='w-full py-20  border-b-[1px] border-b-black'
      >
      <div className='flex flex-col gap-4 font-titleFont mb-14'>
        <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
          Features 
        </h3>
        <h1 className='text-5xl capitalize text-gray-300 font-bold'>
          What I do 
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
           />
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
          icon = {<AiFillAppstore/>} />
      </div>
    </section>
  )
}

export default Features
