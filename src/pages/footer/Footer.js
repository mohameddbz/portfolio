import React from 'react'
import {logo} from '../../assets'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid_cols-1 md:grid-cols-2 gap-20'>
        <div className="w-full h-full flex flex-col gap-8 px-20">
            <img className="w-32" src={logo} alt="logo" />
            <div className="flex gap-4">
            <span className="bannerIcon">
                        <a
                          href="https://www.facebook.com/profile.php?id=100070273536669"
                        >
                          <FaFacebookF />
                        </a>
                      </span>
                      <span className="bannerIcon">
                        <a
                          href="https://www.linkedin.com/in/dabouz-mohamedamine-b76198280/"
                        >
                          <FaLinkedinIn />
                        </a>
                      </span>
                      <span className="bannerIcon">
                        <FaTwitter />
                      </span>
            </div>
        </div>        
    </div>
  )
}

export default Footer
