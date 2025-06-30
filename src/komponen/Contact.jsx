import React, { useState } from 'react'

const Contact = () => {
        const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: ''
        });
        const [focusedField, setFocusedField] = useState('');

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                });
        };

        return (
                <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
                        <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                                        Contact Me
                                </h2>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        Let's create something amazing together. Drop me a message and I'll get back to you soon!
                                </p>
                        </div>

                        <div className="max-w-[800px] mx-auto">
                                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
                                        <div className="p-8 md:p-12">
                                                <form action="#" method="POST" className="space-y-6">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                                <div className="relative">
                                                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                                                                Name
                                                                        </label>
                                                                        <input 
                                                                                type="text" 
                                                                                name="name" 
                                                                                value={formData.name}
                                                                                onChange={handleChange}
                                                                                onFocus={() => setFocusedField('name')}
                                                                                onBlur={() => setFocusedField('')}
                                                                                placeholder="Your Name"
                                                                                className={`bg-gray-800/50 w-full px-4 py-4 text-white placeholder-gray-400 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                                                                                        focusedField === 'name' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-600 hover:border-gray-500'
                                                                                }`}
                                                                        />
                                                                </div>

                                                                <div className="relative">
                                                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                                                                Email
                                                                        </label>
                                                                        <input 
                                                                                type="email" 
                                                                                name="email" 
                                                                                value={formData.email}
                                                                                onChange={handleChange}
                                                                                onFocus={() => setFocusedField('email')}
                                                                                onBlur={() => setFocusedField('')}
                                                                                placeholder="your@email.com"
                                                                                className={`bg-gray-800/50 w-full px-4 py-4 text-white placeholder-gray-400 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                                                                                        focusedField === 'email' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-600 hover:border-gray-500'
                                                                                }`}
                                                                        />
                                                                </div>
                                                        </div>

                                                        <div className="relative">
                                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                                        Message
                                                                </label>
                                                                <textarea 
                                                                        name="message" 
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                        onFocus={() => setFocusedField('message')}
                                                                        onBlur={() => setFocusedField('')}
                                                                        placeholder="Tell me about your project..."
                                                                        className={`bg-gray-800/50 w-full px-4 py-4 text-white placeholder-gray-400 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none ${
                                                                                focusedField === 'message' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-600 hover:border-gray-500'
                                                                        }`}
                                                                        rows="5"
                                                                />
                                                        </div>

                                                        <button 
                                                                type="submit"
                                                                className="group relative w-full p-4 mt-6 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                                                        >
                                                                <span className="relative z-10">Send Message</span>
                                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                        </button>
                                                </form>
                                        </div>
                                </div>

                                {/* Social Media Icons */}
                                <div className="flex justify-center space-x-8 mt-12">
                                        <a 
                                                href="https://github.com/nia212" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="group p-3 bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                                        >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                        </a>
                                        
                                        <a 
                                                href="https://kaggle.com/nianiania" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group p-3 bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                                        >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.236.179 0 .118-.034.209-.104.271L13.78 12.99l5.851 10.625c.070.78.070.162.025.244"/>
                                                </svg>
                                        </a>
                                        
                                        <a 
                                                href="https://discord.gg/sirius403" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group p-3 bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                                        >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                                </svg>
                                        </a>
                                </div>
                        </div>
                </div>
        )
}

export default Contact; 
