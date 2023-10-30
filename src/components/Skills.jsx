import React from 'react'

import HTML from '../assets/html.logo.png';
import CSS from '../assets/css.logo.jpeg';
import JavaScript from '../assets/js.logo.png';
import ReactImg from '../assets/react.logo.png';
import Node from '../assets/node.logo.png';
import FireBase from '../assets/firebase.logo.png';
import AWS from '../assets/aws.logo.png';
import GitHub from '../assets/github.logo.png';
import Tailwind from '../assets/tailwind.logo.jpeg';
import Mongo from '../assets/mongo.logo.jpeg';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-f'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>// These are the technologies i've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icons" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icons" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icons" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icons" />
            <p className='my-4'>ReactImg</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="HTML icons" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="HTML icons" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ Mongo } alt="HTML icons" />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="HTML icons" />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills