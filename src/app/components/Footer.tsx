"use client";

import React, {useState} from 'react'
import { RiInstagramFill, RiYoutubeFill, RiMailFill, RiDiscordFill} from "react-icons/ri";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const menuItems = [
        { href: 'https://www.instagram.com/aggie.robotics/', child:  <RiInstagramFill className='h-8 w-8 text-primary' /> },
        { href: 'mailto:aggieroboticstx@gmail.com', child: <RiMailFill className='h-8 w-8 text-primary' /> },
        { href: 'https://www.youtube.com/@AggieRobotics', child: <RiYoutubeFill className='h-8 w-8 text-primary' /> },
        { href: 'https://linktr.ee/aggie.robotics', child: <Image src='/logos/icons/linktree.png' alt='Linktree' width={32} height={32} className='h-8 w-8 text-primary' /> },
    ];  
  return (
    <footer className='w-full brand-band'>
        <div className='flex flex-col items-center justify-center py-8 gap-5'>
            <div className='flex flex-row items-center gap-3'>
                {
                    menuItems.map((item) => (
                        <Link target='_blank' key={item.href} href={item.href} className='lift p-3 surface rounded-2xl'>
                            {item.child}
                        </Link>
                    ))
                }
            </div>
            <div className='flex flex-col items-center gap-1.5'>
                <div className='font-primary text-white/85 text-lg tracking-wide'> &copy; 2026 Aggie Robotics</div>
                <div className='flex items-center gap-2 font-secondary text-sm text-white/75'>
                    <Link href='/privacy' className='hover:text-white hover:underline underline-offset-2'>Privacy Policy</Link>
                    <span aria-hidden='true'>&middot;</span>
                    <Link href='/terms' className='hover:text-white hover:underline underline-offset-2'>Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer;