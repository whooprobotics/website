import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiFilePdf2Line, RiMailLine, RiToolsLine, RiTrophyLine, RiUserHeartLine } from "react-icons/ri";
import BenefitsTable from "@/src/app/components/sponsors/BenefitsTable";
import DonateCard from "@/src/app/components/sponsors/DonateCard";
import SponsorWall from "@/src/app/components/sponsors/SponsorWall";
import { ADVISOR_EMAIL, ADVISOR_NAME, PACKET_URL, SPONSOR_EMAIL } from "@/src/content/sponsors";
import { pageMetadata } from "@/src/lib/seo";

const impact = [
  {
    icon: RiToolsLine,
    title: "BUILD BETTER ROBOTS",
    body: "Gifts buy motors, metal, and 3D printing filament so students can machine, build, and rebuild until the design is right.",
  },
  {
    icon: RiTrophyLine,
    title: "GET US TO COMPETITION",
    body: "Registration, travel, and hotels for the VEX U World Championship and combat events across Texas.",
  },
  {
    icon: RiUserHeartLine,
    title: "REACH THE NEXT AGGIES",
    body: "Aggieland Classic and campus outreach that puts robotics in front of hundreds of students each year.",
  },
];

const steps = [
  {
    title: "EMAIL US",
    body: "Send your name, company, a PNG of your logo, and the tier you would like to join to our sponsorship inbox.",
  },
  {
    title: "WE FOLLOW UP",
    body: "A student officer replies promptly with next steps, payment options, and anything else you need.",
  },
];

export default function Sponsors() {
  return (
    <main className="flex flex-col">
      <div className="relative flex h-80 flex-col items-center justify-center overflow-hidden hero-scrim">
        <Image
          src="/team/org-25-26.jpg"
          alt="The Aggie Robotics organization at Texas A&M University"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0"
          priority
        />
        <div className="relative z-10 mx-6 max-w-4xl text-center">
          <h1 className="font-primary text-5xl font-bold text-white drop-shadow-2xl md:text-7xl">
            PARTNER WITH AGGIE ROBOTICS
          </h1>
          <p className="mt-4 font-secondary text-lg text-white/90 drop-shadow-lg">
            Every gift puts tools in students&rsquo; hands, robots on the field, and Aggies on the world stage.
          </p>
        </div>
      </div>

      <section className="w-full py-16">
        <div className="mx-6 md:mx-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-primary text-5xl text-primary">WHERE YOUR GIFT GOES</h2>
              <p className="mt-4 max-w-2xl font-secondary text-lg">
                Aggie Robotics is a student-run organization at Texas A&amp;M. We are funded almost entirely by
                sponsors, alumni, and families, and every dollar is spent by students on the robots, the
                competitions, and the outreach that grow this program.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {impact.map((item) => (
                  <div key={item.title} className="surface flex gap-4 rounded-2xl p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-primary text-xl">{item.title}</h3>
                      <p className="mt-1 font-secondary text-muted">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <DonateCard />
          </div>
        </div>
      </section>

      <section className="w-full py-16 ink-band">
        <div className="mx-6 md:mx-10">
          <h2 className="font-primary text-5xl text-white">OUR SPONSORS</h2>
          <p className="mt-4 max-w-3xl font-secondary text-lg text-white/80">
            These companies, funds, and campus partners make our season possible, listed by giving level from
            Diamond to Bronze. You will find every one of them on the back of our team shirt.
          </p>
          <div className="mt-10">
            <SponsorWall />
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-6 md:mx-10">
          <h2 className="font-primary text-5xl text-primary">SPONSORSHIP TIERS</h2>
          <p className="mt-4 max-w-3xl font-secondary text-lg">
            We are grateful for contributions at every tier, whether financial or in-kind donations like
            materials, components, or machinery that strengthen our design, build, and outreach efforts. The
            full story of our programs, results, and reach is in the{" "}
            <a href={PACKET_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              2026&ndash;2027 sponsorship packet
            </a>
            .
          </p>
          <div className="mt-10">
            <BenefitsTable />
          </div>
          <p className="mt-4 font-secondary text-sm text-muted">
            ** For Diamond, Platinum, and Gold sponsorships, we ask for a short meeting with our faculty
            advisor so we can thank you personally and plan how best to recognize your support.
          </p>
        </div>
      </section>

      <section className="w-full py-16 ink-band">
        <div className="mx-6 md:mx-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-primary text-5xl text-white">HOW TO SPONSOR</h2>
              <p className="mt-4 font-secondary text-lg text-white/80">
                Two steps, and a student officer takes it from there.
              </p>
              <ol className="mt-8 flex flex-col gap-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-primary text-primary">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-primary text-xl text-white">{step.title}</h3>
                      <p className="mt-1 font-secondary text-white/75">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="surface flex flex-col gap-5 rounded-3xl p-6 md:p-8">
              <div>
                <h3 className="font-primary text-2xl md:text-3xl">START THE CONVERSATION</h3>
                <p className="mt-2 font-secondary text-muted">
                  Email us with your company and tier, or read the packet first. In-kind parts, manufacturing
                  time, and shop tours are all welcome.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${SPONSOR_EMAIL}`}
                  className="brand-band lift inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-primary text-xl tracking-wide text-white"
                >
                  <RiMailLine className="h-5 w-5" />
                  {SPONSOR_EMAIL}
                </a>
                <a
                  href={PACKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-primary text-xl tracking-wide text-primary ring-1 ring-primary/20"
                >
                  <RiFilePdf2Line className="h-5 w-5" />
                  Sponsorship Packet
                </a>
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-primary tracking-wide text-muted transition-colors hover:text-primary"
                >
                  Meet the Team
                </Link>
              </div>
              <p className="font-secondary text-sm text-muted">
                Diamond, Platinum, and Gold sponsors: please also copy our faculty advisor {ADVISOR_NAME} at{" "}
                <a href={`mailto:${ADVISOR_EMAIL}`} className="text-primary underline">
                  {ADVISOR_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Sponsor Us",
  description:
    "Support Aggie Robotics at Texas A&M University. Donate through the Texas A&M Foundation and meet the sponsors behind our VEX U, combat robotics, and outreach programs.",
  path: "/sponsors",
  keywords: [
    "sponsor Aggie Robotics",
    "Texas A&M Foundation donation",
    "robotics sponsorship",
    "student org sponsorship Texas A&M",
  ],
});
