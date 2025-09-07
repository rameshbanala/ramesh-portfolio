import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>by Ramesh Banala</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ramesh Banala. All rights reserved.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-sm text-gray-500">
            Built with React, Vite, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
