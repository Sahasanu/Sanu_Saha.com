import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="navcont sticky  text-white">
            <div className='flex bg-black px-[4vw] justify-between h-[7vh] items-center z-11 fixed top-0 w-[100%]'>
                {/* Logo */}
                <div className="logo text-[20px] font-bold">Sanu Saha</div>

                {/* Navigation Options */}
                <div className="opt hidden md:block">
                    <ul className='flex w-[50vw] md:w-[25vw] text-[16px] md:text-[18px] justify-between'>
                        <li className='hover:cursor-pointer p-[3px] hover:font-bold'>Home</li>
                        <li className='hover:cursor-pointer p-[3px] hover:font-bold'>About Me</li>
                        <li className='hover:cursor-pointer p-[3px] hover:font-bold'>Projects</li>
                    </ul>
                </div>

                <div className="hamburger md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[20px]">☰</button>
                </div>
            </div>
            <div className={`hambergermenu ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col mt-[7vh] w-[100%] gap-[5px] text-center font-bold bg-[#080808e9] z-11  fixed '>
                    <li className='hover:cursor-pointer p-[3px] hover:font-bold'>Home</li>
                    <li className='hover:cursor-pointer p-[3px] hover:font-bold'>Projects</li>
                    <li className='hover:cursor-pointer p-[3px] hover:font-bold'>About Me</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
