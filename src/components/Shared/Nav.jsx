import React from 'react'
import Logo from '../../assets/images/Logo.png' //../assets/images/Logo.png

const Nav = () => {
  return (
     <nav className="py-4 px-6 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Future Earth Logo" className="w-55"/>
        </div>

        {/* Buttons & Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Button: Get a Home */}
          <button className="bg-light text-white text-sm px-4 py-2 font-medium hover:brightness-110 transition">
            GET AN iRISE HOME
          </button>

          {/* Button: Support */}
          <button className="bg-universe text-primary text-sm px-4 py-2 font-medium hover:brightness-110 transition">
            SUPPORT
          </button>

          {/* Hamburger Menu Icon */}
          <button className="flex flex-col justify-between h-7 w-8 focus:outline-none">
            <span className="block h-1 bg-white rounded-sm shadow-sm"></span>
            <span className="block h-1 bg-white rounded-sm shadow-sm"></span>
            <span className="block h-1 bg-white rounded-sm shadow-sm"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
