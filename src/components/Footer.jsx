import React from 'react'
import { Link } from 'react-router-dom'
import innervationLogo from "../assets/innervationlogoonly.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img className='w-12 mr-4' src={innervationLogo} alt="" />
            <h3 className="text-xl font-bold mb-1">Innervation IT Solutions</h3>
            <p className="text-gray-500">
             Technology meets understanding because you come first.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className='h-0.5 w-28 bg-black mb-4'></div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <div className='h-0.5 w-20 bg-black mb-4'></div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">Data Analytics</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Business Intelligence</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Consulting</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Training</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold ">Contact</h4>
            <div className='h-0.5 w-20 bg-black mb-4'></div>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@Innervation IT Solutions.ca</li>
              <li className="text-gray-600">Ravet, Pune</li>
            </ul>
          </div>
        </div>
        <div className="border-top border-gray-800 mt-4 pt-4">
          <p className="text-gray-400 text-xm">
            © {new Date().getFullYear()} Innervation IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer