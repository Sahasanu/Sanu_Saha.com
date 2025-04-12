import React from 'react'
import X_photo from "../assets/Projects/X_photo.png"
import todo from "../assets/Projects/to_do.png"
import spotify from "../assets/Projects/spotify.png"

function Project() {
    let projects = [
        {
            name: "TO-DO App",
            description: "A task management app that stores todos in browser's local storage, allowing persistent data between sessions",
            image: todo,
            link: "https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main/To-Do%20App",
            tecnhologies:[ "Html", "Tailwind", "JavaScript", "React"]
        },
        {
            name: "Music Player -Spotify Clone",
            description: "A task management app that stores todos in browser's local storage, allowing persistent data between sessions",
            image: spotify,
            link: "https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main/Spotify%20Clone",
            tecnhologies:[ "Html", "Css","JavaScript"]
        },
        {
            name: "X clone",
            description: "A replica of X (Twitter) platform featuring core components with Tailwind CSS styling. Frontend-only implementation responsive design.",
            image: X_photo,
            link: "https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main/X%20Clone",
            tecnhologies:[ "Html", "Tailwind"]
        },
    ]
    return (
        <div className='project_container text-gray-300 mt-[10vh]'>
            <div className="heading  w-[90%] ml-auto mr-auto flex items-center justify-between">
                <p className=' font-[700] text-[40px] text-[#e6a420]'> Projects</p>
               <a href="https://github.com/Sahasanu/Web-Devlopment-Projects/tree/main" target='_blank' className='font-extrabold text-[20px]'>More &#8594;</a>

            </div>
            <div className="cards w-[90%] ml-auto mr-auto mt-[5vh] flex justify-around flex-wrap">
                {projects.map((project, index) => (
                    <div key={index} className="card w-[28%] p-[1vw] rounded-[10px] flex-col flex items-center bg-[#76b5f927] mb-[2vh]">
                        <div className="thumb  w-[95%] h-[30vh] rounded-[10px] overflow-hidden">
                            <img src={project.image} alt={project.name} className='w-full h-full object-cover' />
                        </div>
                        <div className="dis w-[95%] mt-[2vh]">
                            <p className='font-bold text-2xl'>{project.name}</p>
                            <p className='mt-[5px]  text-[17px] line-clamp-3 h-[8vh]'>{project.description}</p>
                            <div className="technologies flex gap-[10px] mt-[2vh] text-gray-900">
                                {project.tecnhologies.map((tech, i) => (
                                    <p key={i} className='bg-[#fff] min-w-[50px] font-bold p-[5px] rounded-[10px] text-center'>{tech}</p>
                                ))}
                            </div>
                        </div>
                        <div className="link w-[95%] text-center mt-[3vh] relative bottom-0">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className='bg-[rgb(153,106,255)] w-[80%] h-[7vh] rounded-[6px] font-bold text-[18px]  hover:cursor-pointer'>
                                    Github Link
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
