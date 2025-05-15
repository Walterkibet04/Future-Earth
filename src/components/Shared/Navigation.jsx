import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from '../../assets/images/Logo.png'

const Navigation = () => {

  const navigate = useNavigate();
  
  return (
    <nav className="w-full m-auto bg-primary/55 px-4 py-3 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Future Earth Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
      </div>

      {/* Buttons and Menu Icon */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <button className="bg-light text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base font-medium ">
          GET A iRISE HOME
        </button>
        <button className="bg-universe text-primary px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base font-medium">
          SUPPORT
        </button>
        <button
          className="text-white focus:outline-none"
          onClick={() => navigate('/menu')}
        >
          <Menu className="h-8 w-8 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </button>
      </div>
    </nav>
  )
}

export default Navigation

