import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Container w-[100vw] h-[100vh]'>
      <Navbar/>
    </div>
    </>
  )
}

export default App
