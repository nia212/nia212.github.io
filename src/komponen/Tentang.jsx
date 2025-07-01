import React from 'react'
import about from '../aset/about.jpg'

const Tentang = () => {
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
                I'm a second-year <span className="text-blue-400 font-semibold">Informatics Engineering</span> student driven by curiosity and a strong foundation in programming. With a passion for both web development and artificial intelligence, I thrive at the intersection of technology and innovation.
              </p>
              <p className="text-base lg:text-lg">
                My journey is fueled by a desire to explore the endless possibilities of technology, and I am committed to continuous learning and growth in this dynamic field.
              </p>
              <p className="text-base lg:text-lg">
                Beyond algorithms and a whole code, I'm also a <span className="text-purple-400 font-semibold">performer, explorer, and storyteller</span>. I love exploring nature and just enjoying the beauty of the world around me.
              </p>
              <p className="text-base lg:text-lg italic text-gray-400">
                Whether through stage performance or code, I strive to craft experiences that resonate, inform, and inspire.
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

export default Tentang
