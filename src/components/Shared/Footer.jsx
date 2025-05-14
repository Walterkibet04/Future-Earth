import React from 'react'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-">
        {/* HOME */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">HOME</h3>
          <ul className="space-y-2 font-light">
            <li>• OUR VISION / PROMISE</li>
            <li>• BENEFITS</li>
            <li>• PATHWAY</li>
            <li>• ONGOING PROJECTS</li>
            <li>• PARTNERS</li>
          </ul>
        </div>

        {/* SUSTAINABLE LIVING */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">SUSTAINABLE LIVING</h3>
          <ul className="space-y-2 font-light">
            <li>• ABOUT SUSTAINABLE LIVING</li>
            <li>• PRODUCT INTRODUCTION</li>
          </ul>
        </div>

        {/* OUR STORY */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">OUR STORY</h3>
          <ul className="space-y-2 font-light">
            <li>• WHAT WE DO</li>
            <li>• WHO WE ARE</li>
            <li>• OUR PARTNERS</li>
            <li>• NEWS UPDATES</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">CONTACT US</h3>
          <ul className="space-y-2 mb-6 font-extralight">
            <li>• REGIONAL CONTACT US</li>
            <li>• CONTACT US FORM</li>
          </ul>
          <div className="border border-secondary p-4 rounded-md text-sm flex gap-3 items-start">
            <FaMapMarkerAlt className="mt-1 text-xl text-white" />
            <div className='font-extralight'>
              <p>Future Earth, Suite 380</p>
              <p>1839 S Alma School Rd</p>
              <p>Mesa, AZ 85210 USA</p>
              <p>480 649 4127</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-secondary my-10" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
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
    </footer>
  )
}

export default Footer
