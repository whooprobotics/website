import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CURRENT_YEAR } from "@/src/content/leadership";
import { getTeamPhoto } from "@/src/content/teamPhotos";

export default function Home() {
  const marketingPhoto = getTeamPhoto(CURRENT_YEAR, "Marketing");

  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-70 overflow-hidden">
        <Image
          src="/stockImages/title.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0"
          priority
        />
        <h1 className="relative z-10 text-7xl font-primary font-bold text-white drop-shadow-2xl">AGGIE ROBOTICS</h1>
      </div>
      {/* We are Section */}
      <div className="flex flex-col justify-center w-full h-60">
        <div className="grid grid-rows-1 grid-cols-3 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5 col-span-2">
            <h2 className="text-5xl font-primary text-primary">WE ARE</h2>
            <p className="text-lg font-secondary">
              Aggie Robotics is a recognized student organization at Texas A&M University. We focus on developing STEAM skills for Texas A&M Students and within the surrounding Bryan/College Station area.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/logos/raw/Black.png"
            alt=""
            width={1280} height={1855}
            className="w-auto h-50"
            />
          </div>
        </div>
      </div>
      {/* Past Year Robots Section */}
      <div className="flex flex-col justify-center w-full h-90 bg-primary">
        <div className="grid grid-rows-1 grid-cols-4 mx-10 h-70 items-center text-white">
          <div className="flex flex-col justify-center gap-5 mx-5">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/2018-19-robot.jpg"
              alt=""
              width={1280} height={1280}
              className="w-auto rounded-xl h-55 hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-lg font-secondary text-center">
              2018-2019: Turning Point
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 mx-5">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/2019-20-robot.jpg"
              alt=""
              width={1280} height={1280}
              className="w-auto rounded-xl h-55 hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-lg font-secondary text-center">
              2019-2020: Tower Takeover
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 mx-5">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/2020-21-robot.jpg"
              alt=""
              width={1280} height={1280}
              className="w-auto rounded-xl h-55 hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-lg font-secondary text-center">
              2020-2021: Change Up
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 mx-5">
            <div className="flex items-center justify-center">
              <Image
              src="/stockImages/2021-22-robot.png"
              alt=""
              width={1280} height={1280}
              className="w-auto rounded-xl h-55 hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-lg font-secondary text-center">
              2021-2022: Tipping Point
            </p>
          </div>
        </div>
      </div>
      {/* Our Programs Title */}
      <div className="flex flex-col justify-center w-full h-30 bg-black">
        <div className="grid grid-rows-1 grid-cols-1 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5">
            <h2 className="text-5xl font-primary text-white">OUR PROGRAMS</h2>
          </div>
        </div>
      </div>
      {/* VEXU Section */}
      <div className="flex flex-col justify-center w-full h-55">
        <div className="grid grid-rows-1 grid-cols-3 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5 col-span-2">
            <Link href="/vexu">
              <h2 className="text-5xl font-primary text-primary hover:scale-105 transition-transform origin-left">VEX University Robotics</h2>
            </Link>
            <p className="text-lg font-secondary">
              Aggie Robotics competes in the Vex U Robotics Competition. Our team, WHOOP, is a highly competitive which is top 10 in the world and has won multiple awards at the World Championship. We are excited to continue our success in the upcoming season!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/stockImages/vexu-logo.png"
            alt=""
            width={900} height={900}
            className="w-auto h-55"
            />
          </div>
        </div>
      </div>
      {/* Combat Section */}
      <div className="flex flex-col justify-center w-full h-55">
        <div className="grid grid-rows-1 grid-cols-3 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5 col-span-2">
            <Link href="/combat">
              <h2 className="text-5xl font-primary text-primary hover:scale-105 transition-transform origin-left">Combat Robotics</h2>
            </Link>
            <p className="text-lg font-secondary">
              Aggie Robotics also is competing in various Robot Combat Events with multiple teams. We are excited to continue our success in the upcoming season!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/stockImages/rce-logo.jpg"
            alt=""
            width={900} height={900}
            className="w-auto h-50"
            />
          </div>
        </div>
      </div>
      {/* Marketing Section */}
      <div className="flex flex-col justify-center w-full h-55">
        <div className="grid grid-rows-1 grid-cols-3 mx-10 h-70 items-center">
          <div className="flex flex-col justify-center gap-5 mx-5 col-span-2">
            <Link href="/marketing">
              <h2 className="text-5xl font-primary text-primary hover:scale-105 transition-transform origin-left">Marketing</h2>
            </Link>
            <p className="text-lg font-secondary">
              To help support our competition teams, Aggie Robotics has a marketing team that focuses on promoting our teams and events through media, outreach, and sponsorship. We are excited to continue growing our marketing efforts in the upcoming season!
            </p>
          </div>
          <div className="flex items-center justify-center">
            {marketingPhoto?.src ? (
              <Image
                src={marketingPhoto.src}
                alt={marketingPhoto.alt}
                width={900}
                height={900}
                className="w-auto h-55 object-cover rounded-xl"
              />
            ) : (
              <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-primary/15">
                <span className="font-primary text-primary text-center px-2">Photo coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics | 2026-2027",
  description: "The official website of Aggie Robotics at Texas A&M University!",
};