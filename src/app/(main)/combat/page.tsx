import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/src/lib/seo";

const WIKI = "https://acr.aggierobotics.com";

const robots = [
  {
    name: "Chill Guy",
    className: "1 lb PlAnt",
    src: "/stockImages/acr-chill-guy.png",
    href: `${WIKI}/wiki/chill-guy`,
    blurb: "A four-wheel plastic antweight with modular side armor and a vertical spinner. Built for Red Dirt Rumble 2026.",
  },
  {
    name: "Cortisol Spike",
    className: "1 lb PlAnt",
    src: "/stockImages/acr-cortisol-spike.jpg",
    href: `${WIKI}/wiki/cortisol-spike`,
    blurb: "A compact 4WD vertical spinner that spins above 20,000 RPM. Originally designed as Mildred, then rebuilt for competition.",
  },
  {
    name: "Drain Gang",
    className: "1 lb PlAnt",
    src: "/stockImages/acr-drain-gang.jpg",
    href: `${WIKI}/wiki/drain-gang`,
    blurb: "A 2WD pink-and-white vertical spinner built in 36 hours. ACR's only playoff robot at Red Dirt Rumble 2026.",
  },
];

const heavierBots = [
  {
    name: "12 lb Hobbyweight",
    src: "/stockImages/acr-12lb-old.png",
    href: `${WIKI}/wiki/weightclass`,
    blurb: "A 4WD hobbyweight with a dual-drum vertical spinner and long forks. In CAD now — ACR's first 12 lb design.",
  },
  {
    name: "3 lb Beetleweight",
    src: null,
    href: `${WIKI}/wiki/weightclass`,
    blurb: "ACR also builds in the 3 lb beetleweight class. Photos and wiki notes will land here as the bot comes together.",
  },
];

export default function Combat() {
  return (
    <main className="flex flex-col justify-center">
      <section className="relative flex flex-col items-center justify-center w-full h-[22rem] overflow-hidden hero-scrim">
        <Image
          src="/stockImages/acr-title.jpg"
          alt="Aggie Combat Robotics team with their robots"
          fill
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
          className="absolute inset-0 z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
          <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] leading-none font-primary font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.4),0_10px_36px_rgba(0,0,0,0.45)]">
            AGGIE COMBAT ROBOTICS
          </h1>
          <p className="font-primary text-2xl md:text-3xl tracking-[0.2em] text-white/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            ACR
          </p>
        </div>
      </section>

      <section className="w-full brand-band py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary heading-rule heading-rule-light">
              WHO WE ARE
            </h2>
            <p className="text-lg font-secondary text-white/90 max-w-2xl">
              Aggie Combat Robotics — ACR — is the combat robotics program of Aggie Robotics at Texas A&amp;M University.
              We design and fight in Plastic Antweight, 3 lb beetleweight, and 12 lb hobbyweight, then write the build
              notes down so the next bot is better than the last.
            </p>
            <p className="text-lg font-secondary text-white/90 max-w-2xl">
              ACR started competing in April 2026 at Red Dirt Rumble at LeTourneau University. The wiki keeps the
              designs, competition history, and safety notes in one place.
            </p>
            <Link
              href={WIKI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark font-primary text-lg self-start"
            >
              ACR wiki
            </Link>
          </div>
          <div className="relative w-full h-72 overflow-hidden rounded-2xl shadow-card ring-1 ring-white/15">
            <Image
              src="/stockImages/acr-title.jpg"
              alt="Aggie Combat Robotics team"
              fill
              className="object-cover"
              style={{ objectPosition: "center 35%" }}
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">
              WEIGHT CLASSES
            </h2>
            <p className="text-lg font-secondary text-body max-w-2xl">
              Plastic Antweight — also called PlAnt — is a 1 lb class with tight material rules. Most of the robot has
              to be 3D-printed plastic. That is where ACR started, and where Chill Guy, Cortisol Spike, and Drain Gang
              fought at Red Dirt Rumble 2026.
            </p>
            <p className="text-lg font-secondary text-body max-w-2xl">
              We also build 3 lb beetleweights and a 12 lb hobbyweight. Class rules live on the wiki.
            </p>
            <Link
              href={`${WIKI}/wiki/weightclass`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost font-primary text-lg self-start"
            >
              Weight class wiki
            </Link>
          </div>
          <div className="relative w-full h-72 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            <Image
              src="/stockImages/acr-12lb.png"
              alt="12 lb hobbyweight CAD"
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      </section>

      <section className="w-full tint-band py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule mb-10">1 LB · PLASTIC ANTWEIGHT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {robots.map((robot) => (
              <article key={robot.name} className="surface lift flex flex-col rounded-2xl overflow-hidden">
                <div className="relative w-full h-48 bg-primary/5">
                  <Image src={robot.src} alt={robot.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-3 p-6 grow">
                  <h3 className="font-primary text-3xl text-primary">{robot.name}</h3>
                  <p className="font-secondary text-body grow">{robot.blurb}</p>
                  <Link
                    href={robot.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost font-primary text-lg self-start"
                  >
                    Wiki notes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule mb-10">3 LB &amp; 12 LB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heavierBots.map((bot) => (
              <article key={bot.name} className="surface lift flex flex-col rounded-2xl overflow-hidden">
                <div className="relative w-full h-64 bg-primary/5">
                  {bot.src ? (
                    <Image src={bot.src} alt={bot.name} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-primary text-2xl text-primary">
                      Photo coming soon
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-3 p-6 grow">
                  <h3 className="font-primary text-3xl text-primary">{bot.name}</h3>
                  <p className="font-secondary text-body grow">{bot.blurb}</p>
                  <Link
                    href={bot.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost font-primary text-lg self-start"
                  >
                    Wiki notes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full ink-band py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-5xl font-primary text-white">THE ACR WIKI</h2>
            <p className="font-secondary text-white/85 max-w-2xl text-lg">
              Build notes, weapon design, weight-class rules, and the safety manual live on the ACR wiki.
            </p>
          </div>
          <Link
            href={WIKI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark font-primary text-lg"
          >
            Open the wiki
          </Link>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Combat Robotics (ACR)",
  description:
    "Aggie Combat Robotics (ACR) builds and fights 1 lb Plastic Antweight, 3 lb beetleweight, and 12 lb hobbyweight robots at Texas A&M University. Meet the bots and the ACR wiki.",
  path: "/combat",
  keywords: [
    "Aggie Combat Robotics",
    "ACR",
    "combat robotics Texas A&M",
    "Plastic Antweight",
    "beetleweight",
    "hobbyweight",
    "battlebots college",
  ],
});
