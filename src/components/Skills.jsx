import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Python', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Java', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'C++', level: 70, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 88, color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'REST APIs', level: 88, color: 'from-indigo-400 to-indigo-600' },
        { name: 'JWT Auth', level: 82, color: 'from-pink-400 to-pink-600' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 80, color: 'from-orange-400 to-orange-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-400 to-green-600' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'from-red-400 to-red-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Postman', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Firebase', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React Native', level: 85, color: 'from-cyan-400 to-cyan-600' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Technologies I Love Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'MongoDB', 'React Native', 'Express'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
