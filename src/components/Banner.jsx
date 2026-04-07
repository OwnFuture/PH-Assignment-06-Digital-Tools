import React from 'react';
import grp5 from '../assets/Group 5.png'
import { CiPlay1 } from "react-icons/ci";
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
      <div className='flex flex-col-reverse lg:flex-row items-center justify-around px-4 lg:px-12'>

  
  <div className='left text-center lg:text-left mt-6 lg:mt-0 max-w-xl'>

   
            <div className='inline-flex items-center bg-blue-200 px-3 py-1 rounded-full'>
                <img src={grp5} alt="" />
                <p className='ml-2 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-sm'>
                    New AI-Powered Tools Available
                </p>
            </div>

   
            <div className='space-y-4 mt-4'>
                <h3 className='font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight'>
                    Supercharge Your <br />Digital Workflow
                </h3>

                <p className='leading-relaxed text-sm sm:text-base'>
                    Access premium AI tools, design assets, templates, and productivity <br /> 
                    software—all in one place. Start creating faster today.
                </p>
            </div>

    
            <div className='mt-5 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
                    <button className='btn bg-linear-to-r from-blue-500 to-purple-600 text-white'>
                        Explore Products
                    </button>

                    <button className='btn border-2 border-blue-400 flex items-center gap-2'>
                        <CiPlay1 /> Watch Demo
                    </button>
            </div>
  </div>

  
  <div className='right mb-6 lg:mb-0'>
    <img className='w-full max-w-md lg:max-w-lg mx-auto' src={bannerImg} alt="" />
  </div>

</div>
    );
};

export default Banner;