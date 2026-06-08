import { motion } from 'framer-motion'

const About = ({ isDark }) => {
  return (
    <section
      id="about"
      className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/400x400?text=Profile+Photo"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-blue-600">Who Am I?</h3>
            <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate full-stack developer with expertise in building scalable web applications.
              With a strong foundation in JavaScript, React, and Node.js, I create user-centric solutions
              that solve real-world problems.
            </p>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or sharing knowledge with the developer community.
            </p>

            <div className="flex gap-4">
              <button className="btn-primary">Get In Touch</button>
              <button className="btn-secondary">View CV</button>
            </div>
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '20+', label: 'Projects Completed' },
            { number: '15+', label: 'Happy Clients' },
            { number: '2+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-700">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</p>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
