import React, { useState } from 'react'
import project1 from '../aset/project1.jpeg'
import project2 from '../aset/project2.jpeg'
import project3 from '../aset/project3.jpeg'
import project4 from '../aset/project4.jpeg'
import project5 from '../aset/project5.jpeg'
import project6 from '../aset/project6.png'

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('website')

    const projects = [
        { id: 1, image: project1, title: 'Project 1', category: 'website', description: 'A modern responsive website built with React and Tailwind CSS' },
        { id: 2, image: project2, title: 'Project 2', category: 'article', link: 'https://www.seputarmuria.com/asah-otak-melalui-otak-atik-minecraft', description: 'An engaging article about brain training through Minecraft' },
        { id: 3, image: project3, title: 'Project 3', category: 'website', description: 'E-commerce platform with user authentication and payment integration' },
        { id: 4, image: project4, title: 'Project 4', category: 'other', description: 'Creative design project showcasing UI/UX principles' },
        { id: 5, image: project5, title: 'Project 5', category: 'article', description: 'Technical blog post about modern web development practices' },
        { id: 6, image: project6, title: 'Project 6', category: 'website', description: 'Portfolio website with interactive animations and smooth scrolling' },
    ]

    const filteredProjects = projects.filter(project => project.category === activeCategory)

    const categories = [
        { key: 'website', label: 'Website' },
        { key: 'article', label: 'Article' },
        { key: 'other', label: 'Other' },
    ]

    return (
        <div className='max-w-[1200px] mx-auto p-5' id='work'>
                <div className='pb-8'>
                        <p className='text-4xl mb-3 font-bold primary-color'>My Projects</p>
                
                </div>

                {/* Category Filter */}
                <div className='flex justify-center mb-8'>
                        <div className='flex space-x-4'>
                                {categories.map(category => (
                                        <button
                                                key={category.key}
                                                onClick={() => setActiveCategory(category.key)}
                                                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                                                        activeCategory === category.key
                                                                ? 'bg-primary-color text-white'
                                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                                {category.label}
                                        </button>
                                ))}
                        </div>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {filteredProjects.map(project => (
                                <div key={project.id} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                                                h-[200px] bg-cover relative'>
                                        <img src={project.image} alt={project.title}/>
                                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                                justify-center items-center p-4'>
                                                <span className='text-2xl font-bold text-white tracking-wider text-center'>{project.title}</span>
                                                <p className='text-white text-sm text-center mt-2 px-2'>{project.description}</p>
                                                <div className='pt-4 text-center'>
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 
                                                                                                        font-bold text-sm'>
                                                                See More
                                                                </button>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        ))}
                </div>
        </div>
    )
}

export default Work
