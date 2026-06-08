import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/f-khalloufi' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
  ]

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'} transition-colors duration-300`}>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Fares Khalloufi</h3>
            <p className="text-sm leading-relaxed">
              Full-stack developer passionate about building modern web applications and contributing to the open-source community.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Fares Khalloufi. All rights reserved.
            </p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
              Made with <FaHeart className="text-red-500" size={16} /> by Fares
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
