import React, { useState } from 'react'
import project1 from '../aset/herokost.png'
import project2 from '../aset/ai_resume.png'
import project3 from '../aset/project3.jpeg'
import project4 from '../aset/cctv_motion.png'
import project5 from '../aset/mbti.jpg'
import project6 from '../aset/lab.png'

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('website')

    const projects = [
        { 
            id: 1, 
            image: project1, 
            title: 'Kost-Hero', 
            category: 'website', 
            description: 'A responsive website designed for students to explore, buy, and sell property in a simple way.',
            link: '#'
        },
        { 
            id: 2, 
            image: project2, 
            title: 'AI Resume Analyzer', 
            category: 'AI-based', 
            description: 'AI-powered resume analysis tool that evaluates candidates based on ATS Framework',
            link: 'https://ai-resume-check.puter.site'
        },
        { 
            id: 3, 
            image: project3, 
            title: 'Craftify', 
            category: 'website', 
            description: 'E-commerce platform with user authentication and payment integration',
            link: '#'
        },
        { 
            id: 4, 
            image: project4, 
            title: 'CCTV Motion Analysis System', 
            category: 'other', 
            description: 'Motion analysis system for security monitoring with interactive features',
            link: 'https://fast-background-for-subtraction-videosurveilans.streamlit.app/'
        },
        { 
            id: 5, 
            image: project5, 
            title: 'Handwriting-based MBTI Classifier', 
            category: 'AI-based', 
            description: 'MBTI personalities classification using handwriting images',
            link: '#'
        },
        { 
            id: 6, 
            image: project6, 
            title: 'STEDLAB', 
            category: 'website', 
            description: 'Virtual Laboratory for Science Education',
            link: '#'
        },
        { 
            id: 7, 
            image: project7, 
            title: 'Brain Tumor Detection using Machine Learning', 
            category: 'AI-based', 
            description: 'Machine Learning system for detecting brain tumors using MRI images',
            link: '#'
        },
    ]

    const filteredProjects = projects.filter(project => project.category === activeCategory)

    const categories = [
        { key: 'website', label: 'Website' },
        { key: 'AI-based', label: 'AI-based' },
        { key: 'other', label: 'Other' },
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br py-16' id='work'>
            <div className='max-w-7xl mx-auto px-6'>

                <div className='text-center mb-16'>
                    <h2 className='text-5xl md:text-4xl font-bold bg-gradient-to-r primary-color bg-clip-text text-transparent mb-6'>
                        My Projects
                    </h2>
                </div>

                <div className='flex justify-center mb-12'>
                    <div className='bg-slate-700/50 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-600'>
                        <div className='flex space-x-2'>
                            {categories.map(category => (
                                <button
                                    key={category.key}
                                    onClick={() => setActiveCategory(category.key)}
                                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                        activeCategory === category.key
                                            ? 'bg-pink-950 text-white shadow-lg transform scale-105'
                                            : 'text-gray-300 hover:text-blue-850 hover:bg-slate-600/50'
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProjects.map(project => {
                        const CardContent = (
                            <div className='group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-700 cursor-pointer'>
                                <div className='relative h-64 overflow-hidden'>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </div>

                                <div className='p-6'>
                                    <h3 className='text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                                        {project.description}
                                    </p>

                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        project.category === 'website' ? 'bg-blue-900/50 text-blue-300 border border-blue-950' :
                                        project.category === 'article' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                                        'bg-purple-900/50 text-purple-300 border border-purple-700'
                                    }`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        )

                        return project.link ? (
                            <a 
                                key={project.id} 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div key={project.id}>{CardContent}</div>
                        )
                    })}
                </div>

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
