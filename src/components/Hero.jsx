import React from 'react'
import sample from "../assets/Sample.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import linkdin from "../assets/linkedin.png"

const Hero = () => {
  return (
    <div className='text-white flex mt-[5vh]'>
      <div className="left w-[50%] pl-[5vw]">
        <p className="hey m-0 text-[28px]">Hey it me..</p>
        <p className="name text-[4em] font-[700] text-orange-300">Sanu Saha</p>
        <div className="sbio w-[90%]">
          <p className='font-bold text-[24px] mt-[2vh]'>Web Developer | Frontend & Backend | Tech Enthusiast </p>
          <p className='text-[16px] mt-[2vh]'>
            I am a passionate web developer focused on building efficient, scalable, and user-centric solutions. With a strong interest in technology and continuous learning, I approach every project with creativity and a problem-solving mindset.</p>
        </div>
        <div className="btn mt-[3vh] ">
          <button className='bg-orange-300 w-[9vw] p-[1vh] rounded-[5px] font-bold text-black'>My Work</button>
        </div>
      </div>
      <div className="right w-[50%] flex ">
        <div className="img w-[90%] "><img className='mr-auto ml-auto w-[350px]' src={sample} alt="" /></div>
        <div className="links  w-[10%] flex-col flex  gap-[15px] items-center justify-center">
          <a href="https://github.com/Sahasanu" target='_blank'> <img className='w-[24px]' src={github} alt="" /></a>
          <a href="" target='_blank'><img className='w-[24px]' src={linkdin} alt="" /></a>
          <a href="" target='_blank'><img className='w-[20px]' src={insta} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
