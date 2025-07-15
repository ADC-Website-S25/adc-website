import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import Link from 'next/link';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#contact', label: 'Contact Us' },
];

const Navbar = () => {
  return (
    <nav className='fixed top-10 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl h-16 flex items-center justify-between px-6 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-lg z-50'>
      <Link href='#home' className='flex items-center space-x-3' draggable={false}>
        <Image
          src='/common/adc-256.png'
          alt='App Dev Club Logo'
          width={40}
          height={40}
          className='w-10 h-10'
          draggable={false}
        />
        <span className='text-xl font-semibold text-gray-800'>
          App Dev Club
        </span>
      </Link>
      
      <div className='hidden md:flex items-center space-x-8'>
        {navLinks.map(({ href, label }) => (
          <NavbarLink key={href} href={href}>
            {label}
          </NavbarLink>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className='block md:hidden'>
          <Button className='rounded-full p-1.5 hover:opacity-100' variant={'ghost'} asChild>
            <Menu className='w-10 h-10 text-gray-700 hover:text-blue-600'/>
          </Button>
        </SheetTrigger>
        <SheetContent className='!w-[250px]'>
          <SheetHeader>
            <SheetTitle className='flex flex-col text-2xl gap-5 mt-10'>
              {navLinks.map(({ href, label }) => (
                <SheetClose asChild key={href}>
                  <NavbarLink href={href}>
                    {label}
                  </NavbarLink>
                </SheetClose>
              ))}
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    draggable={false}
    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold"
  >
    {children}
  </Link>
);

export default Navbar