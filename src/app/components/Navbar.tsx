"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenuLine, RiCloseLargeLine } from "react-icons/ri";
import classNames from 'classnames';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { label: 'Home', href: '/' },
        // { label: 'Officers', href: '/officers' },
        { label: 'Outreach', href: '/outreach' },
        { label: 'VEXU', href: '/vexu' },
        { label: 'Combat Robotics', href: '/combat' },
        { label: 'Media', href: '/media' },
        { label: 'Sponsors', href: '/sponsors' },
        // { label: 'Contact', href: '/contact' },
    ];
  return (
    <nav className='fixed top-0 w-full bg-white shadow-md/25 shadow-gray-600 z-30'>
        <div className='mx-auto lg:pr-5 py-1'>

            {/* Desktop View */}
            <div className='flex items-center justify-between h-16 font-primary'>
                <Link href='/' className='px-5 hover:scale-110 transition-transform'>
                    <Image src="/logos/raw/Black.png" alt="Logo" className="w-8 h-12" width={1280} height={1855}/>
                </Link>
                {/* desktop menu (nav bar links) */}
                <div className='hidden lg:flex items-center space-x-7'>
                    {
                        menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link className={classNames('transition tracking-wider text-xl text-black hover:scale-110 hover:text-primary', {
                                    'scale-110 text-primary': isActive
                                })} 
                                href={item.href} key={item.href}>{item.label}</Link>
                            )
                        })
                    }
                </div>  
                {/* mobile menu (dashboard button) */}
                <button className='lg:hidden p-4 m-2 text-black hover:text-primary transition-colors cursor-pointer'
                    onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? (<RiCloseLargeLine className='w-6 h-6'/>) : (<RiMenuLine className='w-6 h-6'/>)
                    }
                </button>
            </div>          

            {/* Mobile View */}
            {
                isMobileMenuOpen && (
                    <div className='lg:hidden absolute w-full border-t-1 border-secondary shadow-md/25 shadow-gray-600 z-10 bg-white transition-transform'>
                        <div className='pb-2 space-y-4'></div>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <div key={item.href}>
                                        <Link className={`block py-2 px-5 font-primary tracking-wider transition-colors text-xl text-black hover:text-primary ${isActive ? ' text-primary' : '' }`}
                                        href={item.href}>{item.label}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar;