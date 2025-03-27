import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import innervationLogo from "../assets/innervationlogoonly.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg shadow-gray-500/40 fixed w-full z-50">
      <div className="max-w-7xl mx-auto p-3">
        <div className="flex justify-between items-center h-16">
          <div>
            <a className='flex flex-row items-center' href="/">
                <img className='w-20 mr-4' src={innervationLogo} alt="" />
                <div>
                    <h1 className='text font-semibold'>Innervation IT Solutions</h1>
                    <p className='text-gray-500 text-sm/5'>world of possibilities!</p>
                </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:font-semibold px-3 py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:font-semibold px-3 py-2">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:font-semibold px-3 py-2">
                Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:font-semibold px-3 py-2">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar