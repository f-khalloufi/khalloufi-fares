import { useState } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Header = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <header className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg sticky top-0 z-50 transition-colors duration-300`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          FK
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <ul className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block py-2 hover:text-blue-600 cursor-pointer transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
