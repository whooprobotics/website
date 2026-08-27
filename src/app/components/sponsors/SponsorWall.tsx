import Image from "next/image";
import { Sponsor, sponsors, Tier, tiers } from "@/src/content/sponsors";

function Tile({ sponsor, tier }: { sponsor: Sponsor; tier: Tier }) {
  const content = sponsor.logo ? (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      width={480}
      height={240}
      className={`rounded-md object-contain transition-transform duration-300 group-hover:scale-105 ${
        sponsor.wide ? "h-full w-full" : "h-full w-auto"
      }`}
    />
  ) : (
    <span
      className={`font-primary text-center ${tier.wordmark} leading-tight tracking-wide text-primary uppercase transition-transform duration-300 group-hover:scale-105`}
    >
      {sponsor.name}
    </span>
  );

  const shell = `surface group flex ${tier.height} items-center justify-center rounded-2xl px-5 py-6`;

  if (!sponsor.href) {
    return (
      <div className={shell} title={sponsor.name}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      title={sponsor.name}
      className={`${shell} lift`}
    >
      {content}
    </a>
  );
}

export default function SponsorWall() {
  return (
    <div className="flex flex-col gap-12">
      {tiers.map((tier) => {
        const group = sponsors.filter((sponsor) => sponsor.tier === tier.id);
        if (group.length === 0) return null;

        return (
          <section key={tier.id}>
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rotate-45 rounded-[2px] ${tier.accent}`} />
              <h3 className="font-primary text-lg tracking-[0.25em] text-white">{tier.label}</h3>
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <ul className={`mt-5 grid gap-4 ${tier.grid}`}>
              {group.map((sponsor) => (
                <li key={sponsor.id}>
                  <Tile sponsor={sponsor} tier={tier} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
