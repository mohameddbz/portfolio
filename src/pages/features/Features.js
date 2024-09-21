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
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card 
          title = "Frontend Development "
          desc = "I am proficient in HTML, CSS, and Tailwind and React for developing dynamic and high-performance web applications." 
           />
        <Card 
          title = "Backend Development "
          desc = "I am proficient in Node.js, Express, java spring, and SQL for building robust and scalable server-side applications, APIs, and database management systems." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Desktop Development "
          desc = "I am skilled in using C# for developing cross-platform desktop applications with seamless user interfaces and efficient performance." 
         />
        <Card 
          title = "Project Management "
          desc = "I am skilled in using agile methodologies like Scrum and Kanban to manage complex projects within deadlines and budgets. I also excel in writing clear specifications that define functional and technical requirements, ensuring effective communication among stakeholders." 
          icon = {<AiFillAppstore/>} />
        <Card 
          title = "Software Architecture "
          desc = "I am skilled in designing robust and scalable software architectures, applying design principles such as microservices, and Service-Oriented Architectures (SOA)." 
         />
        <Card 
          title = "Cybersecurity "
          desc = "I have expertise in cybersecurity, particularly in implementing data protection mechanisms, vulnerability prevention, and auditing system security." 
          icon = {<AiFillAppstore/>} />
      </div>
    </section>
  )
}

export default Features
