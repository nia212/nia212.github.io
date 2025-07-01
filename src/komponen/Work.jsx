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
                <div className='min-h-screen bg-gradient-to-br py-16' id='work'>
                        <div className='max-w-7xl mx-auto px-6'>
                                {/* Header Section */}
                                <div className='text-center mb-16'>
                                        <h2 className='text-5xl md:text-4xl font-bold bg-gradient-to-r primary-color bg-clip-text text-transparent mb-6'>
                                                My Projects
                                        </h2>
                                </div>

                                {/* Category Filter */}
                                <div className='flex justify-center mb-12'>
                                        <div className='bg-slate-700/50 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-600'>
                                                <div className='flex space-x-2'>
                                                        {categories.map(category => (
                                                                <button
                                                                        key={category.key}
                                                                        onClick={() => setActiveCategory(category.key)}
                                                                        className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                                                                activeCategory === category.key
                                                                                        ? 'bg-primary-color text-white shadow-lg transform scale-105'
                                                                                        : 'text-gray-300 hover:text-white hover:bg-slate-600/50'
                                                                        }`}
                                                                >
                                                                        {category.label}
                                                                </button>
                                                        ))}
                                                </div>
                                        </div>
                                </div>

                                {/* Projects Grid */}
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                        {filteredProjects.map(project => (
                                                <div key={project.id} className='group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-700'>
                                                        {/* Project Image */}
                                                        <div className='relative h-64 overflow-hidden'>
                                                                <img 
                                                                        src={project.image} 
                                                                        alt={project.title}
                                                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                                                />
                                                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                                        </div>
                                                        
                                                        {/* Project Content */}
                                                        <div className='p-6'>
                                                                <h3 className='text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors duration-300'>
                                                                        {project.title}
                                                                </h3>
                                                                <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                                                                        {project.description}
                                                                </p>
                                                                
                                                                {/* Category Badge */}
                                                                <div className='flex items-center justify-between'>
                                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                                                project.category === 'website' ? 'bg-blue-900/50 text-blue-300 border border-blue-700' :
                                                                                project.category === 'article' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                                                                                'bg-purple-900/50 text-purple-300 border border-purple-700'
                                                                        }`}>
                                                                                {project.category}
                                                                        </span>
                                                                        
                                                                        {project.link && (
                                                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                                                        <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
                                                                                                View Project
                                                                                        </button>
                                                                                </a>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </div>
                                        ))}
                                </div>

                                {/* Empty State */}
                                {filteredProjects.length === 0 && (
                                        <div className='text-center py-16'>
                                                <div className='text-6xl mb-4'>🔍</div>
                                                <h3 className='text-2xl font-bold text-gray-100 mb-2'>No projects found</h3>
                                                <p className='text-gray-300'>Try selecting a different category</p>
                                        </div>
                                )}
                        </div>
                </div>
        )
}

export default Work
