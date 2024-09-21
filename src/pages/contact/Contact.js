import React from 'react'
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
  return (
    <section 
            id='contact'
            className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
                <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
                Contact
                </h3>
                <h1 className='text-4xl md:text-5xl capitalize text-gray-300 font-bold'>
                Contact With Me
                </h1>
            </div>
        </div>
        <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <ContactLeft/>
                <ContactRight/>
            </div>
        </div>
    </section>
  )
}

export default Contact
