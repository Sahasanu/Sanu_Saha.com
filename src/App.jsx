import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <div className='Container w-[100vw] h-[100vh] font-poppins'>
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default App
