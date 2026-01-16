import React from 'react'
import about from '../aset/about.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 px-4" id="about">
      <div className='md:grid md:grid-cols-2 md:gap-12 items-center'>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center py-6 md:py-0">
          <div className="mx-6">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r primary-color bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base lg:text-lg">
                I'm a <span className="text-blue-400 font-semibold">Information Technology enthusiast</span> driven by curiosity and a huge attachment in programming and Artificial Intelligence.
              </p>
              <p className="text-base lg:text-lg">
                Every project begins with a question: what problem are we really trying to solve?
              </p>
              <p className="text-base lg:text-lg">
                I<span className="text-purple-400 font-semibold"> help </span>people build modern digital products by understanding the goals and applying the right technology solutions.
              </p>
              <p className="text-base lg:text-lg italic text-gray-400">
                I love combining art and technology to create meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-8 md:py-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-30"></div>
            <img 
              className="relative rounded-3xl shadow-2xl border-2 border-gray-700 hover:scale-105 transition-transform duration-300" 
              src={about} 
              width={350} 
              height={350}
              alt="About me"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
