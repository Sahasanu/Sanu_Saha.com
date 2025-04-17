import React from 'react'
import sample from "../assets/Hero/Sample.png"
import nsta from "../assets/Hero/insta.png"
import github from "../assets/Hero/github.png"
import linkdin from "../assets/Hero/linkedin.png"

const Hero = () => {
  return (
    <div className='text-white flex flex-col-reverse lg:flex-row mt-[5vh] pt-[5vh] items-center lg:items-start '>
      {/* Left Section */}
      <div className="left mt-[2vh] lg:mt-[0] w-full lg:w-[50%] lg:pl-[5vw] pl-[15px] pr-[15px]  lg:text-left">
        <p className="hey m-0 text-[20px] lg:text-[28px]">Hey it me..</p>
        <p className="name text-[40px] m-0 lg:text-[4em] font-[700] text-orange-300">Sanu Saha</p>
        <div className="sbio lg:w-[90%] mx-auto lg:mx-0">
          <p className='font-bold text-[19px]  w-full lg:text-[24px] mt-[2vh]'>Web Developer | Frontend & Backend | Tech Enthusiast </p>
          <p className='text-[16px] lg:text-[24px] mt-[2vh]'>
            I am a passionate web developer focused on building efficient, scalable, and user-centric solutions. With a strong interest in technology and continuous learning, I approach every project with creativity and a problem-solving mindset.
          </p>
        </div>

        <div className="btn mt-[3vh] w-[100%] lg:text-start text-center">
          <button className='bg-orange-300 w-[60%] lg:w-[10vw] lg:p-[1vh] p-[1vh] lg:text-[20px] text-[16px] rounded-[5px] font-bold text-black'><a href="https://www.linkedin.com/in/sanu-saha-a67934354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Connect With Me</a></button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-[90%] lg:w-[50%] flex  items-center "> 
        <div className="img w-[90%] lg:w-[90%]  mx-auto lg:mx-0 ">
          <img className='w-[100%] lg:w-[55%] mx-auto' src={sample} alt="" />
        </div>
        <div className="links w-[10%] flex-col flex gap-[2vh] lg:gap-[3vh] items-center  ">
          <a href="https://github.com/Sahasanu" target='_blank'> <img className='w-[20px] lg:w-[24px]' src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/sanu-saha-a67934354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img className='w-[20px] lg:w-[24px]' src={linkdin} alt="" /></a>
          <a href="https://www.instagram.com/_sanu_saha_?igsh=YWk2azlwMnVmNHg0" target='_blank'><img className='w-[18px] lg:w-[20px]' src={nsta} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
