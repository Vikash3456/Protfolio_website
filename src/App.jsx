import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    // Update theme class and save preference
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative">
        <div className="w-full">
          <Hero />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
