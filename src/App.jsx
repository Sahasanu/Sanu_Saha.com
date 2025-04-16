import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/skills'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div className='max-w-screen min-h-screen font-poppins [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-hidden lg:pb-[10vh] pb-[5vh]'>
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <About/>
      </div>
    </>
  )
}

export default App
