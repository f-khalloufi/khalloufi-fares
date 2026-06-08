import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { skills } from './data/skills'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} projects={projects} />
      <Skills isDark={isDark} skills={skills} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
