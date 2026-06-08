import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-colors duration-300`}
    >
      <motion.div
        className="container-custom text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white">
            FK
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Fares Khalloufi
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-4 text-gray-600 dark:text-gray-300">
          Full-Stack Developer & Creative Problem Solver
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          I build modern, responsive web applications with React, Node.js, and modern web technologies.
          Passionate about clean code, user experience, and continuous learning.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary">
            View My Work
          </button>
          <button className="btn-secondary">
            Download CV
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce text-blue-600 dark:text-blue-400"
        >
          <FaArrowDown size={32} className="mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
