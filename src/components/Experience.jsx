import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'ScaleOrange Technologies',
      role: 'Software Developer Intern — Full-Stack & Mobile',
      location: 'Hyderabad, India (Hybrid)',
      duration: 'May 2025 – Present',
      color: 'from-blue-500 to-purple-600',
      current: true,
      bullets: [
        {
          text: 'Architected and shipped ServeNest — a cross-platform React Native app connecting 5,000+ users with hyperlocal service providers via integrated maps, WhatsApp deep-links, and direct calls.',
          highlight: '5,000+ users'
        },
        {
          text: 'Built role-based admin dashboards (React.js + Node.js + PostgreSQL) with real-time analytics, reducing manual reporting effort by ~60%.',
          highlight: '~60% reduction'
        },
        {
          text: 'Designed and implemented RESTful APIs (Express.js) for community modules — events, jobs, marketplace, and donations — handling concurrent user requests with JWT-secured endpoints.',
          highlight: null
        },
        {
          text: 'Integrated Razorpay payment gateway enabling subscription-based monetisation; implemented webhook handlers for reliable payment lifecycle management.',
          highlight: 'Razorpay'
        },
        {
          text: 'Built and deployed Estate360 (PERN stack + React Native monorepo) — a full-scale real estate listing and management application with property search, agent dashboards, and geo-filter capabilities.',
          highlight: 'Estate360'
        },
        {
          text: 'Managed Linux VMs on cloud infrastructure, configured Docker containers for isolated service deployments, and set up Nginx reverse proxy with custom domain and SSL termination.',
          highlight: null
        },
        {
          text: 'Implemented real-time push notifications using Firebase Cloud Messaging, improving user engagement metrics.',
          highlight: 'Firebase Cloud Messaging'
        },
        {
          text: 'Optimised PostgreSQL queries with JSONB indexing and query plans, reducing average API response time by ~40%.',
          highlight: '~40% faster'
        },
      ],
      techStack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'Razorpay', 'Firebase FCM', 'JWT', 'Linux']
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building production-grade applications and shipping real features for real users
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-16 md:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-4 top-6 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                <Briefcase size={12} className="text-white md:w-4 md:h-4" />
              </div>

              {/* Experience card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group">

                {/* Card header gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`} />

                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/15 text-green-400 rounded-full text-xs font-semibold border border-green-500/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-semibold text-base md:text-lg">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 lg:text-right xl:text-left shrink-0">
                      <span className="flex items-center gap-1.5 text-sm text-gray-400 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <Calendar size={13} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-400 bg-slate-700/50 px-3 py-1.5 rounded-full">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <motion.li
                        key={bIdx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bIdx * 0.07 }}
                        className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shrink-0" />
                        <span>{bullet.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-600/15 to-purple-600/15 text-blue-300 border border-blue-500/25 hover:border-purple-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
