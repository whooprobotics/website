import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/src/app/components/PageHeader";
import { pageMetadata } from "@/src/lib/seo";

export default function Outreach() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title Section */}
      <PageHeader title="OUTREACH" />

      {/* Aggieland Classic Section */}
      <section className="w-full brand-band py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <figure className="photo-card flex flex-col gap-3">
            <Image
              src="/stockImages/outreach-mentor.jpg"
              alt="Aggie Robotics members hosting the Aggieland Classic VEX competition"
              width={1024}
              height={651}
              className="w-full h-64 object-cover rounded-xl"
            />
            <figcaption className="text-sm font-secondary text-white/85 text-center pb-1">
              Members hosting Aggieland Classic!
            </figcaption>
          </figure>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary heading-rule heading-rule-light">
              AGGIELAND CLASSIC
            </h2>
            <p className="text-lg font-secondary text-white/90 max-w-2xl">
              Annually, we host a V5 VEX Robotics competition here in Aggieland called the Aggieland Classic! This event brings in teams from all over Texas to compete and have fun! We also have a booth for competitors to learn more about Aggie Robotics and Texas A&M Engineering as well!
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">MENTORSHIP</h2>
            <p className="text-lg font-secondary text-body max-w-2xl">
              As many of our members have prior experience in robotics, we reach back out to their previous teams to help in any possible way. We mentor a handful of Houston-based VEX High School Robotics teams and have mentors present in the FIRST Tech Challenge to help students go further in their robotics career!
            </p>
          </div>
          <figure className="flex flex-col gap-3">
            <Image
              src="/stockImages/outreach-mentor.jpg"
              alt="Aggie Robotics members mentoring students at a local VEX competition"
              width={1024}
              height={651}
              className="w-full h-64 object-cover rounded-2xl shadow-card ring-1 ring-black/5"
            />
            <figcaption className="text-sm font-secondary text-muted text-center">
              Members helping at a local VEX competition
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Outreach",
  description:
    "Aggie Robotics hosts the Aggieland Classic and mentors K-12 VEX teams across Bryan/College Station, bringing hands-on STEAM to students in the Brazos Valley.",
  path: "/outreach",
  keywords: [
    "Aggieland Classic",
    "VEX tournament College Station",
    "STEM outreach Bryan Texas",
    "robotics mentorship",
    "Texas A&M outreach",
  ],
});
