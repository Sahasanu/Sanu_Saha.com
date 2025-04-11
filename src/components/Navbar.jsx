import React from 'react'


const navbar = () => {
    return (
        <div className='flex bg-black text-white pl-[4vw] pr-[4vw] justify-between h-[7vh] items-center'>
            <div className="logo text-[20px] font-bold" >Sanu Saha</div>
            <div className="opt">
                <ul className='flex gap-[30px]'>
                    <li className='hover:cursor-pointer p-[3px] hover:text-[#8f8d8dd8]'>Home</li>
                    <li className='hover:cursor-pointer p-[3px] hover:text-[#8f8d8dd8]'>About Me</li>
                    <li className='hover:cursor-pointer p-[3px] hover:text-[#8f8d8dd8] '>Projects</li>
                    <li className='hover:cursor-pointer p-[3px] hover:text-[#8f8d8dd8] '>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default navbar
