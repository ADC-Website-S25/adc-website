import Image from 'next/image'
import React from 'react'
import SmoothLink from './smooth-link';

const Navbar = () => {
  return (
    <nav className='fixed top-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl h-16 flex items-center justify-between px-6 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-lg z-50'>
      <SmoothLink href='#home' className='flex items-center space-x-3' draggable={false}>
        <Image
          src='/common/adc-256.png'
          alt='App Dev Club Logo'
          width={40}
          height={40}
          className='h-10 w-10'
          draggable={false}
        />
        <span className='text-xl font-semibold text-gray-800 hidden sm:block'>
          App Dev Club
        </span>
      </SmoothLink>
      
      <div className='flex items-center space-x-8'>
        <NavbarLink href='#about'>About</NavbarLink>
        <NavbarLink href='#projects'>Projects</NavbarLink>
        <NavbarLink href='#sponsors'>Sponsors</NavbarLink>
        <NavbarLink href='#highlights'>Highlights</NavbarLink>
        <NavbarLink href='#contact'>Contact Us</NavbarLink>
      </div>
    </nav>
  )
}

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
  <SmoothLink
    href={href}
    draggable={false}
    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold"
  >
    {children}
  </SmoothLink>
);

export default Navbar