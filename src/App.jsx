import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import ExpertiseSection from './components/ExpertiseSection'
import PricingSection from './components/PricingSection'
import CategoriesSection from './components/CategoriesSection'
import ContactSection from './components/ContactSection'

import Footer from './components/Footer'



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className='w-full min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-200'>

      <NavBar theme={theme} setTheme={setTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      
        <HeroSection />
        <ProjectSection />
        <ExpertiseSection />
        <PricingSection />
        <CategoriesSection />
        <ContactSection/>
        <Footer />
      
    </div>
  )
}

export default App
