'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-gray-800">
          <Image src="/images/logo.jpg" alt='logo' width={50} height={50}/>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          {/* <a href="#team" className="text-gray-700 hover:text-gray-900">Team</a> */}
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Overlay and Menu */}
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="md:hidden bg-white z-20 relative">
            <a href="#home" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">About</a>
            <a href="#services" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Services</a>
            <a href="#projects" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Projects</a>
            {/* <a href="#team" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Team</a> */}
            <a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Contact</a>
          </div>
        </>
      )}
    </nav>
  );
}
