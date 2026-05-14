import { Metadata } from "next";
import Image from "next/image";

export default function Outreach() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-35 overflow-hidden">
        <h1 className="relative z-10 text-7xl font-primary text-black">OUTREACH</h1>
      </div>
      {/* Aggieland Classic Section */}
      <div className="flex flex-col justify-center w-full h-80 bg-primary text-white">
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
            <h2 className="text-5xl font-primary">AGGIELAND CLASSIC</h2>
            <p className="text-lg font-secondary">
              Annually, we host a V5 VEX Robotics competition here in Aggieland called the Aggieland Classic! This event brings in teams from all over Texas to compete and have fun! We also have a booth for competitors to learn more about Aggie Robotics and Texas A&M Engineering as well!
            </p>
          </div>
        </div>
      </div>
      {/* Mentorship Section */}
      <div className="flex flex-col justify-center w-full h-80">
        <div className="grid grid-rows-1 grid-cols-2 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary">MENTORSHIP</h2>
            <p className="text-lg font-secondary">
              As many of our members have prior experience in robotics, we reach back out to their previous teams to help in any possible way. We mentor a handful of Houston-based VEX High School Robotics teams and have mentors present in the FIRST Tech Challenge to help students go further in their robotics career!
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/outreach-mentor.jpg"
              alt=""
              width={1024} height={651}
              className="w-auto h-55"
              />
            </div>
            <h2 className="text-sm font-secondary">Members helping at a local VEX competition</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics - Outreach",
  description: "The outreach efforts of Aggie Robotics at Texas A&M University.",
};
