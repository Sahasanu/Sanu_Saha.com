import React from 'react'
import html from "../assets/Skills/Html.webp"

const skills = () => {
    let skills = [
        {
            name: "Html",
            image: html,
        },
        {
            name: "css",
            image: html,
        },
        {
            name: "Js",
            image: html,
        },
        {
            name: "Tailwind",
            image: html,
        },
        {
            name: "MongoDB",
            image: html,
        },
        {
            name: "Express",
            image: html,
        },
        {
            name: "Next.js",
            image: html,
        },

    ]
    return (
        <div className='skill_container  text-white mt-[5vh]'>
            <div className=' font-[700] text-[40px] text-[#e6a420] w-[90%] ml-auto mr-auto'>Skills</div>
            <div className="skills_cards  w-[90%] ml-auto mr-auto flex justify-around mt-[4vh]">
                {skills.map((skill, index) => (
                    <div key={index} className="card w-[13%] p-[5px] rounded-[10px] flex-col flex items-center bg-[#ffffff11] mb-[2vh]">
                    <div className="thumb  w-[95%] h-[13vh] rounded-[10px] overflow-hidden">
                        <img src={skill.image} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="dis w-[95%] mt-[10px]">
                        <p className='font-bold text-2xl text-center'>{skill.name}</p>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default skills
