import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/skills'
import About from './components/About'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <>
      <div className='max-w-screen min-h-screen font-poppins [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-x-hidden'>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="about">
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
