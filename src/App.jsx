import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div className='max-w-screen min-h-screen font-poppins [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <Navbar />
        <Hero />
        <Project />
      </div>
    </>
  )
}

export default App
