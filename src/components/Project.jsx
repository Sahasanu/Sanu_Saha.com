import React from 'react'
import sample from "../assets/Sample.jpg"

function Project() {
    let projects = [
        {
            Project_name: "x clone",
            Project_description: "This is a clone of the X app (frontend Only)",
            Project_image: sample
        },
    ]
    return (
        <div className='project_container text-gray-300 mt-[10vh]'>
            <div className="heading cards w-[90%] ml-auto mr-auto font-[700] text-[40px] text-[#e6a420]">Projects</div>
            <div className="cards w-[90%] ml-auto mr-auto mt-[5vh] flex justify-around">
                <div className="card w-[28%] p-[1vw] rounded-[10px] flex-col flex items-center bg-[#76b5f927]">
                    <div className="thumb border w-[95%] h-[30vh] rounded-[10px] overflow-hidden">
                        <img src={sample} alt="" className='w-[auto]' />
                    </div>
                    <div className="dis w-[95%] mt-[2vh]">
                        <p className='font-bold text-2xl'>This is heading</p>
                        <p className='mt-[5px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem similique quaerat in assumenda maxime laborum impedit, maiores at quam ipsa?</p>
                        <div className="tecnologies flex gap-[10px] mt-[2vh] text-gray-900">
                           <p className='bg-[#fff] min-w-[50px]  font-bold p-[5```````````````````````````````px] rounded-[10px] text-center'>Html</p>
                           <p className='bg-[#fff] min-w-[50px]  font-bold p-[5px] rounded-[10px] text-center'>Css</p>
                           <p className='bg-[#fff] min-w-[50px]  font-bold p-[4px] rounded-[10px] text-center'>Javascript</p>
                          
                       
                        </div>
                    </div>
                    <div className="link w-[95%] text-center mt-[3vh]">
                        <button className='bg-[rgb(120,54,178)] w-[80%] h-[7vh] rounded-[6px] font-bold text-[18px] border-1 hover:cursor-pointer'>Github Link</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
