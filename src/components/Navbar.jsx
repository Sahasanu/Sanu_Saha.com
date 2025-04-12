import React from 'react'


const navbar = () => {
    return (
        <div className="navcont sticky">
            <div className='flex bg-black text-white pl-[4vw] pr-[4vw] justify-between h-[7vh] items-center'>
                <div className="logo text-[20px] font-bold" >Sanu Saha</div>
                <div className="opt">
                    <ul className='flex w-[25vw] mr-[5vw] text-[18px]  justify-between'>
                        <li className='hover:cursor-pointer p-[3px]   hover:font-bold'>Home</li>
                        <li className='hover:cursor-pointer p-[3px]  hover:font-bold'>About Me</li>
                        <li className='hover:cursor-pointer p-[3px]  hover:font-bold '>Projects</li>
                        <li className='hover:cursor-pointer p-[3px]  hover:font-bold '>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar
