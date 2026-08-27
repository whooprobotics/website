import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/src/app/components/PageHeader";

export default function VEXU() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <PageHeader title="About VEXU" />

      {/* About VEX Section */}
      <section className="w-full brand-band py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary text-white heading-rule heading-rule-light">
              VEX ROBOTICS COMPETITION
            </h2>
            <p className="text-lg font-secondary text-white/90 max-w-2xl">
              VEX is a robotics competition from 4th grade to University with a game that changes every year. Our teams compete in the University level which allows custom manufacturing and 3D printing.
            </p>
          </div>
          <div className="logo-panel">
            <Image src="/stockImages/vex-logo.png" alt="" width={746} height={341} className="w-auto h-40" />
          </div>
        </div>
      </section>

      {/* This Season Section */}
      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/stockImages/override-field.png"
              alt=""
              width={1500}
              height={844}
              className="w-full h-auto rounded-2xl shadow-card ring-1 ring-black/5"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">
              2026-2027 OVERRIDE
            </h2>
            <p className="text-lg font-secondary text-body">
              Override is played on a 12&apos; x 12&apos; square field where each team will build two robots to score pins and cups into nine various-height goals, set toggles to their alliance color, and manage match-loading stations for scoring opportunities. Within the last 10 seconds of the match, robots will navigate to the contested midfield boundary to earn additional points and potentially claim the points of bonus objects in the center goal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics - VEXU",
  description: "The VEXU robotics teams of Aggie Robotics at Texas A&M University.",
};
