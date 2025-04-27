import React from 'react'

import html from "../assets/Skills/html.svg"
import react from "../assets/Skills/react.svg"
import Express from "../assets/Skills/Express.png"
import mongo from "../assets/Skills/mongo.svg"
import js from "../assets/Skills/js.svg"
import Css from "../assets/Skills/css.svg"
import Clan from "../assets/Skills/C.png"
import node from "../assets/Skills/node.svg"
import tailwind from "../assets/Skills/tailwind.svg"
import next from "../assets/Skills/next.svg"

const Skills = () => {
    const skillsList = [
        {
            name: "Html",
            image: html
        },
        {
            name: "Css",
            image: Css,
        },
        {
            name: "Js",
            image: js,
        },
        {
            name: "Node.js",
            image: node,
        },
        {
            name: "React",
            image: react,
        },
        {
            name: "tailwind",
            image: tailwind,
        },
        {
            name: "Express",
            image: Express,
        },
        {
            name: "Mongo",
            image: mongo,
        },
        {
            name: "Next.js",
            image: next,
        },
        {
            name: "C",
            image: Clan,
        },
    ]
    return (
        <div className='skill_container text-white  mt-[5vh] lg:mt-[10vh] pb-[2vh]  '>
            <div className='font-[700] text-[30px]  md:text-4xl text-[#e6a420] w-full sm:w-11/12 md:w-10/12  pl-[5vw]'>Skills</div>
            <div className="skills_cards w-full sm:w-11/12 md:w-10/12 lg:w-[90%] mx-auto flex mt-[4vh] gap-6 sm:gap-8 md:gap-12 flex-wrap justify-center ">
                {skillsList.map((skill, index) => (
                    <div key={index} className="card  w-[25%] sm:w-1/2 md:w-1/3 lg:w-[16%] p-[2px] rounded-[10px] flex-col flex items-center bg-[#d7f3be1a] ">
                        <div className="thumb w-[95%] h-[6vh] lg:h-[13vh] rounded-[10px] overflow-hidden bg-white pt-2">
                            <img src={skill.image} alt="" className='lg:w-[80%] lg:h-[80%] w-[90%] h-[90%] object-center rounded-2xl m-auto' />
                        </div>
                        <div className="dis w-[95%] mt-[5px]">
                            {/* <p className='font-bold text-[18px] text-center text-green-500'>{skill.name}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
