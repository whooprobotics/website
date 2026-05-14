import { Metadata } from "next";
import Image from "next/image";

export default function VEXU() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-35 overflow-hidden">
        <h1 className="relative z-10 text-7xl font-primary text-black">About VEXU</h1>
      </div>
      {/* About VEX Section */}
      <div className="flex flex-col justify-center w-full h-80 bg-primary">
        <div className="grid grid-rows-1 grid-cols-2 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary text-white">VEX ROBOTICS COMPETITION</h2>
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
      {/* This Season Section */}
      <div className="flex flex-col justify-center w-full h-80 ">
        <div className="grid grid-rows-1 grid-cols-2 mx-10 h-70 items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/override-field.png"
              alt=""
              width={1500} height={844}
              className="w-auto h-70"
              />
            </div>
            {/* <h2 className="text-sm font-secondar">Members hosting Aggieland Classic!</h2> */}
          </div>
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary">2026-2027 OVERRIDE</h2>
            <p className="text-lg font-secondary">
              Override is played on a 12' x 12' square field where each team will build two robots to score pins and cups into nine various-height goals, set toggles to their alliance color, and manage match-loading stations for scoring opportunities. Within the last 10 seconds of the match, robots will navigate to the contested midfield boundary to earn additional points and potentially claim the points of bonus objects in the center goal.
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
