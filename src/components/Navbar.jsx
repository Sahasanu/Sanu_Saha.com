import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <div className="navcont sticky text-white z-50">
      <div className='flex bg-black px-[4vw] justify-between h-[7vh] items-center fixed top-0 w-[100%]'>
        {/* Logo */}
        <div className="logo text-[20px] font-bold">Sanu Saha</div>

        {/* Desktop Navigation */}
        <div className="opt hidden md:block">
          <ul className='flex w-[50vw] md:w-[25vw] text-[16px] md:text-[18px] justify-between'>
            <li onClick={() => scrollToSection('home')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Home</li>
            <li onClick={() => scrollToSection('projects')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Projects</li>
            <li onClick={() => scrollToSection('skills')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Skills</li>
            <li onClick={() => scrollToSection('about')} className='hover:cursor-pointer p-[3px] hover:font-bold'>About Me</li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[20px]">☰</button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`hambergermenu ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col mt-[7vh] w-[100%] gap-[5px] text-center font-bold bg-[#080808e9] fixed z-40 pb-[10px]'>
          <li onClick={() => scrollToSection('home')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Home</li>
          <li onClick={() => scrollToSection('projects')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Projects</li>
          <li onClick={() => scrollToSection('skills')} className='hover:cursor-pointer p-[3px] hover:font-bold'>Skills</li>
          <li onClick={() => scrollToSection('about')} className='hover:cursor-pointer p-[3px] hover:font-bold'>About Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
