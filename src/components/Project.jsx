import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import manager from "../assets/Projects/manegar.png"
import todo from "../assets/Projects/todo.png"
import spotify from "../assets/Projects/spotify.png"


function Project() {
    const projects = [
        {
            name: "Password Manager",
            description: "A secure password manager that stores credentials in local storage and a database, ensuring protection and reliability. Simplify digital security with easy access to your passwords.",
            image:manager ,
            link: "https://github.com/Sahasanu/Password-Manegar",
            tecnhologies: ["Html","React","Tailwind","Mongo","Express"]
        },
        {
            name: "TO-DO App",
            description: "A simple and intuitive to-do app to manage your tasks efficiently. Stay organized with features that let you plan, track, and prioritize your work. Your productivity, streamlined.",
            image: todo,
            link: "https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main/To-Do%20App",
            tecnhologies: ["Html", "Tailwind", "JavaScript", "React"]
        },
        {
            name: "Music Player -Spotify Clone",
            description: "A replica of X (Twitter) platform featuring core components with Tailwind CSS styling. Frontend-only implementation responsive design.",
            image: spotify,
            link: "https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main/Spotify%20Clone",
            tecnhologies: ["Html", "Css", "JavaScript"]
        },
       
    ]

    const ProjectCard = ({ project }) => (
        <div className="card w-[90%] sm:w-[45%] md:w-[30%] lg:p-[1vw] rounded-[10px] flex-col flex items-center bg-[#76b5f927]  mx-auto p-[2vw] relative z-10 pb-[2vh]">
            <div className="thumb w-[95%] h-[40%] md:h-[30vh] rounded-[10px] overflow-hidden">
                <img src={project.image} alt={project.name} className='w-full h-full object-cover' />
            </div>
            <div className="dis w-[95%] mt-[2vh]">
                <p className='font-bold text-xl md:text-2xl'>{project.name}</p>
                <p className='mt-[5px] text-[14px] md:text-[17px] line-clamp-3'>{project.description}</p>
                <div className="technologies flex gap-[10px] mt-[2vh] text-gray-900 flex-wrap ">
                    {project.tecnhologies.map((tech, i) => (
                        <p key={i} className='bg-[#fff] min-w-[50px] font-bold p-[5px] rounded-[7px] text-center'>{tech}</p>
                    ))}
                </div>
            </div>
            <div className="link w-[95%] text-center mt-[3vh]">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className='bg-[rgb(159,116,252)] w-[80%] h-[6vh] rounded-[6px] font-bold text-[16px] md:text-[18px] hover:cursor-pointer mb-[2vh] '>
                        Github Link
                    </button>
                </a>
            </div>
        </div>
    );

    return (
        <div className='project_container text-gray-300 lg:mt-[5vh] mt-[2vh]'>
            <div className="heading w-[90%] mx-auto flex items-center justify-between">
                <p className='font-[700] text-[30px] md:text-[40px] text-[#e6a420]'>Projects</p>
                <a href="https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main" target='_blank' className='font-extrabold text-[16px] md:text-[20px]'>More &#8594;</a>
            </div>

            {/* Slider for mobile */}
            <div className="block md:hidden w-[100%] mt-[5vh] relative z-10">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="relative"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid for tablet and larger */}
            <div className="hidden md:flex w-[90%] mx-auto mt-[5vh] flex-wrap gap-[20px] justify-center ">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Project
