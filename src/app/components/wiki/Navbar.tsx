"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-red-900 p-3 flex flex-row justify-between">
      <Link href="/wiki" className="flex flex-row items-center">
        <Image src="/logos/wiki/Eveleth_Wiki.png" alt="Aggie Robotics Wiki Logo" width={250} height={4106}/>
      </Link>
    </div>
  )
}

export default Navbar;