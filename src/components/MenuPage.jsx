import React from 'react'
import { X, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../src/assets/images/Logo.png'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const MenuPage = () => {

    const navigate = useNavigate();
    const handleExit = () => {
       navigate('/');
    };
    
    const [openSection, setOpenSection] = useState(null);
    
    const toggleSection = (section) => {
       setOpenSection(openSection === section ? null : section);
    };
    
    const menuItems = [
        {
          title: 'HOME',
          path: '/',
          items: [
            'OUR VISION / PROMISE',
            'BENEFITS',
            'PATHWAY',
            'ONGOING PROJECTS',
            'PARTNERS',
          ],
        },
        {
          title: 'SUSTAINABLE LIVING',
          path: '/SustainableLiving',
          items: [
            'ABOUT SUSTAINABLE LIVING',
            'PRODUCT INTRODUCTION',
          ],
        },
        {
          title: 'OUR STORY',
          path: '/OurStory',
          items: [
            'WHAT WE DO',
            'WHO WE ARE',
            'OUR TEAM',
            'ADVISORY BOARD',
            'OUR PARTNERS',
            'NEWS UPDATES',
          ],
        },
        {
          title: 'CONTACT US',
          path: '/Contact',
          items: [
            'REGIONAL CONTACT US',
            'CONTACT US FORM',
          ],
        },
    ];
    
  return (
    <div className="relative min-h-screen bg-black text-white font-sans bg-cover bg-center"
      style={{ backgroundImage: 'url(/wooden.png)' }} 
    >
          {/* Header */}
          <header className="flex justify-between items-center p-4 lg:p-8">
            <img src={Logo} alt="Future Earth Logo" className="h-10 w-auto" />
            <button
              onClick={handleExit}
              className="text-white text-sm flex items-center gap-2"
            >
              <span>Exit Menu</span>
              <X size={28} />
            </button>
          </header>
    
          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 p-12 text-sm">
            {menuItems.map((section, index) => (
              <div key={index}>
                <div className="flex justify-between items-center font-bold text-lg mb-4">
                  <button
                    className="text-left"
                    onClick={() => navigate(section.path)}
                  >
                    {section.title}
                  </button>
                  <button
                    className="block lg:hidden"
                    onClick={() => toggleSection(index)}
                  >
                    {openSection === index ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                </div>
                <ul
                  className={`space-y-2 ${openSection === index || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}
                >
                  {section.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
    
          {/* Footer Icons */}
            <div className="flex flex-col m-10 md:flex-row justify-between items-center text-xs gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-white">Get in touch</span>
                   <div className="flex gap-3 text-white text-lg">
                      <FaWhatsapp />
                      <FaFacebookF />
                      <FaTwitter />
                      <FaYoutube />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                    © 2021 Future Earth Sustainable Living
                </div>
            </div>
    </div>
  )
}

export default MenuPage
