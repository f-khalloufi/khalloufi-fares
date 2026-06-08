import { motion } from 'framer-motion'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'

const Skills = ({ isDark, skills }) => {
  const SkillCategory = ({ icon: Icon, title, items, isDark }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
      >
        <div className="flex items-center gap-4 mb-6">
          <Icon className="text-blue-600" size={32} />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} text-center hover:transform hover:scale-105 transition-transform`}
            >
              <p className="font-semibold text-blue-600">{skill.name}</p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <section
      id="skills"
      className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory
            icon={FaCode}
            title="Frontend"
            items={skills.frontend}
            isDark={isDark}
          />
          <SkillCategory
            icon={FaServer}
            title="Backend"
            items={skills.backend}
            isDark={isDark}
          />
          <SkillCategory
            icon={FaTools}
            title="Tools"
            items={skills.tools}
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
