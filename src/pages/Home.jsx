import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

      <ThemeToggle/>
      <StarBackground/>
      <Navbar/>

      <main>
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
      
    </div>
  )
}
