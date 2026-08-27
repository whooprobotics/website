import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CURRENT_YEAR } from "@/src/content/leadership";
import { getTeamPhoto } from "@/src/content/teamPhotos";
import HeroVideo from "@/src/app/components/HeroVideo";

const pastRobots = [
  { src: "/stockImages/2018-19-robot.jpg", caption: "2018-2019: Turning Point" },
  { src: "/stockImages/2019-20-robot.jpg", caption: "2019-2020: Tower Takeover" },
  { src: "/stockImages/2020-21-robot.jpg", caption: "2020-2021: Change Up" },
  { src: "/stockImages/2021-22-robot.png", caption: "2021-2022: Tipping Point" },
  { src: "/stockImages/2022-23-robot.jpg", caption: "2022-2023: Spin Up" },
  { src: "/stockImages/2023-24-robot.jpg", caption: "2023-2024: Over Under" },
  { src: "/stockImages/2024-25-robot.jpg", caption: "2024-2025: High Stakes" },
  { src: "/stockImages/2025-26-robot.jpg", caption: "2025-2026: Push Back" },
];

export default function Home() {
  const marketingPhoto = getTeamPhoto(CURRENT_YEAR, "Marketing");

  const programs = [
    {
      title: "VEX University Robotics",
      href: "/vexu",
      cta: "About VEXU",
      body: "Aggie Robotics competes in the Vex U Robotics Competition. Our team, WHOOP, is a highly competitive which is top 10 in the world and has won multiple awards at the World Championship. We are excited to continue our success in the upcoming season!",
      image: { src: "/stockImages/vexu-logo.png", width: 900, height: 900, className: "w-auto h-44" },
    },
    {
      title: "Combat Robotics",
      href: "/combat",
      cta: "About ACR",
      body: "Aggie Combat Robotics — ACR — designs and fights robots in Plastic Antweight, 3 lb, and 12 lb. The program debuted at Red Dirt Rumble 2026 and keeps the build notes on the ACR wiki.",
      image: {
        src: "/stockImages/rce-logo.jpg",
        width: 900,
        height: 900,
        className: "w-auto h-40 rounded-xl",
      },
    },
    {
      title: "Marketing",
      href: "/marketing",
      cta: "About Marketing",
      body: "To help support our competition teams, Aggie Robotics has a marketing team that focuses on promoting our teams and events through media, outreach, and sponsorship. We are excited to continue growing our marketing efforts in the upcoming season!",
      image: marketingPhoto?.src
        ? { src: marketingPhoto.src, width: 900, height: 900, className: "w-auto h-48 object-cover rounded-xl" }
        : null,
    },
  ];

  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <section className="relative flex flex-col items-center justify-center w-full h-[30rem] overflow-hidden hero-scrim">
        <HeroVideo />
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
          <h1 className="text-[clamp(3rem,11.5vw,9.5rem)] leading-none font-primary font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.4),0_10px_36px_rgba(0,0,0,0.45)]">
            AGGIE ROBOTICS
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 font-primary text-lg">
            <Link href="/team" className="btn btn-primary">
              Meet the team
            </Link>
            <Link href="#programs" className="btn btn-on-dark">
              Our programs
            </Link>
          </div>
        </div>
      </section>

      {/* We are Section */}
      <section className="w-full py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2 flex flex-col gap-5">
            <h2 className="text-5xl font-primary text-primary heading-rule">WE ARE</h2>
            <p className="text-lg font-secondary text-body max-w-2xl">
              Aggie Robotics is a recognized student organization at Texas A&M University. We focus on developing STEAM skills for Texas A&M Students and within the surrounding Bryan/College Station area.
            </p>
          </div>
          <div className="logo-panel">
            <Image src="/logos/raw/Black.png" alt="" width={1280} height={1855} className="w-auto h-44" />
          </div>
        </div>
      </section>

      {/* Past Year Robots Section */}
      <section className="w-full brand-band py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-4xl md:text-5xl font-primary text-white heading-rule heading-rule-light">
              PAST ROBOTS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastRobots.map((robot) => (
              <figure key={robot.src} className="photo-card flex flex-col gap-3">
                <Image
                  src={robot.src}
                  alt=""
                  width={1280}
                  height={1280}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <figcaption className="font-secondary text-white/85 text-center pb-1">
                  {robot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Title */}
      <section id="programs" className="scroll-mt-20 w-full ink-band py-12">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <h2 className="text-5xl font-primary text-white">OUR PROGRAMS</h2>
        </div>
      </section>

      {programs.map((program, index) => (
        <section
          key={program.href}
          className={`w-full py-16 ${index % 2 === 1 ? "tint-band" : ""}`}
        >
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 flex flex-col items-start gap-5">
              <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">
                {program.title}
              </h2>
              <p className="text-lg font-secondary text-body max-w-2xl">{program.body}</p>
              <Link href={program.href} className="btn btn-primary font-primary text-lg">
                {program.cta}
              </Link>
            </div>
            <div className="logo-panel">
              {program.image ? (
                <Image
                  src={program.image.src}
                  alt=""
                  width={program.image.width}
                  height={program.image.height}
                  className={program.image.className}
                />
              ) : (
                <span className="font-primary text-primary text-center px-2 py-10">Photo coming soon</span>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics | 2026-2027",
  description: "The official website of Aggie Robotics at Texas A&M University!",
};
