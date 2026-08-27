"use client";

import React, {useState} from 'react'
import { RiInstagramFill, RiYoutubeFill, RiMailFill, RiDiscordFill} from "react-icons/ri";
import Link from 'next/link';

const Footer = () => {
    const menuItems = [
        { href: 'https://www.instagram.com/aggie.robotics/', child:  <RiInstagramFill className='h-8 w-8 text-primary' /> },
        { href: 'mailto:aggieroboticstx@gmail.com', child: <RiMailFill className='h-8 w-8 text-primary' /> },
        // { href: 'https://discord.gg/zXHfajB6td', child: <RiDiscordFill className='h-8 w-8 text-primary' /> },
        { href: 'https://www.youtube.com/@AggieRobotics', child: <RiYoutubeFill className='h-8 w-8 text-primary' /> },
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
            <div>
                <div className='font-primary text-white/85 text-lg tracking-wide'> &copy; 2026 Aggie Robotics</div>
            </div>
        </div>
    </footer>
  )
}
export default Footer;