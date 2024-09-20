import React from 'react'
import {logo} from '../../assets'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-2 gap-20'>
        <div className="w-full h-full flex flex-col gap-8 px-20">
            <img className="w-32" src={logo} alt="logo" />
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaFacebookF />
                </span>
                <span className="bannerIcon">
                    <FaTwitter />
                </span>
                <span className="bannerIcon">
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
        <div className="w-full h-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
            Quick Link
            </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                    About
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                    Portfolio
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                    Services
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                    Blog
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
                <li>
                    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                    Contact
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer
