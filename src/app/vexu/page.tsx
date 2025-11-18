import { Metadata } from "next";
import Image from "next/image";

export default function VEXU() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-35 overflow-hidden">
        <h1 className="relative z-10 text-7xl font-primary text-black">VEXU TEAMS</h1>
      </div>
      {/* How We Give Back Section */}
      <div className="flex flex-col justify-center w-full h-80 bg-primary">
        <div className="grid grid-rows-1 grid-cols-2 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary text-white">VEX ROBOTICS</h2>
            <p className="text-lg font-secondary text-white">
              VEX is a robotics competition from 4th grade to University with a game that changes every year. Our teams compete in the University level which allows custom manufacturing and 3D printing.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/stockImages/vex-logo.png"
            alt=""
            width={746} height={341}
            className="w-auto h-55"
            />
          </div>
        </div>
      </div>
      {/* Aggieland Classic Section */}
      <div className="flex flex-col justify-center w-full h-80">
        <div className="grid grid-rows-1 grid-cols-2 mx-10 h-70 items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/outreach-mentor.jpg"
              alt=""
              width={1024} height={651}
              className="w-auto h-55"
              />
            </div>
            <h2 className="text-sm font-secondar">Members hosting Aggieland Classic!</h2>
          </div>
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary">2025-2026 PUSHBACK</h2>
            <p className="text-lg font-secondary">
              Pushback is played on a 12ft x 12ft square field
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics - VEXU",
  description: "The VEXU robotics teams of Aggie Robotics at Texas A&M University.",
};
