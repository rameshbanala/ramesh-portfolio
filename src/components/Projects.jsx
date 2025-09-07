import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

// Import project images
import resumeAnalyzerImg from '../assets/resume_analyzer.png'
import agrofixImg from '../assets/agrofix.png'
import fixitImg from '../assets/fixit.png'

const Projects = () => {
  const projects = [
    {
      title: 'Resume Analyzer – AI Resume Evaluation Platform',
      description: 'Built a full-stack application to parse, evaluate, and score resumes using Gemini. Designed a scalable PostgreSQL schema with JSONB fields for flexible resume data. Implemented email validation, rating constraints, query-optimized indexes, and suggested personalized improvements with upskilling advice from parsed data.',
      image: resumeAnalyzerImg, // Using actual project image
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'React.js', 'Gemini AI'],
      liveDemo: 'https://resume-analyzer-app.netlify.app',
      github: 'https://github.com/rameshbanala/resume-analyzer',
      featured: true
    },
    {
      title: 'AgroFix – Bulk Agro Order Management',
      description: 'Built a platform to manage bulk fruit and vegetable orders for institutions. Implemented user/admin roles, order tracking, and responsive UI for seamless agricultural commerce management.',
      image: agrofixImg, // Using actual project image
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
      liveDemo: 'https://agrofix.netlify.app/',
      github: 'https://github.com/rameshbanala/agro-fix-frontend',
      featured: true
    },
    {
      title: 'FixIt – On-Demand Home Repair Services Platform',
      description: 'Built a marketplace connecting homeowners with skilled workers. Integrated JWT-based authentication and MySQL database. Developed comprehensive booking system, secure payments, and file upload functionality for worker verification.',
      image: fixitImg, // Using actual project image
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
      liveDemo: 'https://fixitfrontend.vercel.app/',
      github: 'https://github.com/rameshbanala/fixitfrontend',
      featured: true
    },
    {
      title: 'ServeNest – Hyperlocal Platform',
      description: 'Developed a React Native app connecting users with local services via maps, WhatsApp, and calls. Built admin dashboards with role-based access and analytics. Integrated community features including events, jobs, marketplace, and donations with real-time notifications and Razorpay monetization.',
      image: null, // No image provided - will show gradient fallback
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Razorpay', 'Maps API', 'Real-time Notifications'],
      liveDemo: null,
      github: null,
      featured: true,
      workProject: true
    },
    {
      title: 'NxtWatch – YouTube Clone with Dark Mode',
      description: 'Built a YouTube-like platform with category-based video browsing, comprehensive login functionality, watchlist management, and seamless theme switching capabilities with JWT authentication.',
      image: null, // No image provided - will show gradient fallback
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'JWT Auth'],
      liveDemo: 'https://rameshnextwatch.netlify.app',
      github: 'https://github.com/rameshbanala/nxtwatch',
      featured: false
    },
    {
      title: 'Wikipedia Search App',
      description: 'Created a dynamic Wikipedia search tool with real-time API integration, featuring instant search results and responsive design using modern web technologies.',
      image: null, // No image provided - will show gradient fallback
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST API'],
      liveDemo: 'https://wikiproj.ccbp.tech',
      github: null,
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work in full-stack and mobile development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                  {project.image ? (
                    // Show actual project image if available
                    <div className="aspect-video">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    // Show gradient fallback if no image
                    <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold opacity-50">
                        {project.title.split(' ')[0]}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </motion.a>
                      )}
                      {project.workProject && (
                        <div className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium">
                          Work Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.workProject && (
                      <span className="ml-3 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        Internship
                      </span>
                    )}
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      >
                        View Live
                        <ArrowRight size={18} className="ml-2" />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center px-6 py-3 border-2 border-slate-600 text-gray-300 rounded-full font-medium hover:border-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </motion.a>
                    )}
                    {!project.liveDemo && !project.github && project.workProject && (
                      <div className="flex items-center px-6 py-3 bg-slate-700/50 text-gray-400 rounded-full font-medium cursor-not-allowed">
                        <span>Private Repository</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="mb-6">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`}
                    className="w-full h-32 object-cover object-top rounded-lg"
                  />
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-lg font-bold opacity-50">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <ExternalLink size={20} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-slate-700/50 text-gray-400 rounded border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons for cards */}
              <div className="flex space-x-2 mt-auto">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-slate-700/50 text-gray-400 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {!project.liveDemo && !project.github && (
                  <div className="flex-1 text-center px-3 py-2 bg-slate-700/30 text-gray-500 rounded-lg text-sm">
                    No Links Available
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more of my work?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples. 
              I'm always working on something new!
            </p>
            <motion.a
              href="https://github.com/rameshbanala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={18} className="mr-2" />
              View GitHub Profile
              <ExternalLink size={18} className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
