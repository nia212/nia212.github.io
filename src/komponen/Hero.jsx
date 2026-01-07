import React from 'react'
import heroImage from '../aset/niapakejas.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[480px]'>
        <img className="mx-auto rounded-3xl py-8 md:py-0" src={heroImage} width={200} height={200}/>
      </div>

      <div className='col-span-2 px-5 my-auto'>
        
        <h1 className="text-white text-4xl sm:text-4xl  lg:text-6xl font-extrabold">
            <span className="primary-color">
                I'm a
            </span> <br/>
            <TypeAnimation
            sequence={[
                'Web Developer',
                1000,
                'Artificial Intelligence Enthusiast',
                1000,
                'Information Technology Explorer',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
        </h1>
        
        <p className="text-white sm:text-lg my-6 lg:text-l">
        
        </p>
       {
        <div className="my-8">
            <a href="https://drive.google.com/file/d/1RHVsV30pKkr57nj3Mtpj7qhRG-owkFgK/view?usp=sharing" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 bg-gradient-to-br from-blue-950 to-pink-700
             text-white">
              My CV
            </a>
            <a href="#contact" className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-950 to-pink-700
             text-white hover:border-none">
              Contact
            </a>
        </div>
        }
      </div>

    </div>
  )
}

export default Hero
