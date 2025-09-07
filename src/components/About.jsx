import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Current CGPA', value: '9.04/10', icon: Award },
    { label: 'Expected Graduation', value: 'May 2026', icon: Calendar },
    { label: 'Location', value: 'Adoni, Kurnool, AP', icon: MapPin },
    { label: 'Degree', value: 'BTech CSE', icon: GraduationCap },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Full-Stack & Mobile Developer
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an aspiring full-stack and mobile app developer with a strong foundation in 
              JavaScript, React, Node.js, and cross-platform mobile development using React Native. 
              Currently pursuing my Bachelor's in Computer Science Engineering at RGUKT RK Valley.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have proven ability to build scalable, secure, and user-centric applications 
              with clean UI and robust backend logic. I'm passionate about innovation, 
              agile collaboration, and problem-solving.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Experience Highlights:</h4>
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <h5 className="text-lg font-semibold text-blue-400 mb-2">React Native Developer Intern</h5>
                <p className="text-purple-300 mb-2">ScaleOrange Technologies - ServeNest</p>
                <p className="text-gray-300">
                  Developed a React Native hyperlocal platform connecting users with local services, 
                  built admin dashboards, integrated community features, and enabled real-time notifications 
                  with Razorpay monetization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-blue-400">Rajiv Gandhi University of Knowledge Technologies, RK Valley</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-lg font-semibold text-green-400">CGPA: 9.04/10.0</p>
                  <p className="text-gray-400">Expected May 2026</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Pre University Course</h4>
                  <p className="text-blue-400">Rajiv Gandhi University of Knowledge Technologies, RK Valley</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-lg font-semibold text-green-400">CGPA: 9.76/10.0</p>
                  <p className="text-gray-400">Jan 2021 - Sep 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Secondary School Certificate</h4>
                  <p className="text-blue-400">Sri Chaitanya School, Adoni, Kurnool</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-lg font-semibold text-green-400">CGPA: 10/10</p>
                  <p className="text-gray-400">Jun 2019 - Mar 2020</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
