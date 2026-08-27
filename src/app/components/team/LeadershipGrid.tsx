import Link from "next/link";
import { LeadershipWithRole } from "@/src/utils/types";
import PersonCard from "./PersonCard";
import TeamBanner from "./TeamBanner";

interface LeadershipGridProps {
  id?: string;
  title: string;
  description?: string;
  photoSrc?: string;
  photoAlt?: string;
  people: LeadershipWithRole[];
  programHref?: string;
  programLabel?: string;
  emptyMessage?: string;
  inverted?: boolean;
  tinted?: boolean;
}

export default function LeadershipGrid({
  id,
  title,
  description,
  photoSrc,
  photoAlt,
  people,
  programHref,
  programLabel,
  emptyMessage,
  inverted = false,
  tinted = false,
}: LeadershipGridProps) {
  const surfaceClass = inverted ? "brand-band text-white" : tinted ? "tint-band" : "";

  return (
    <section id={id} className={`scroll-mt-24 w-full py-16 ${surfaceClass}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <h2
              className={`text-4xl md:text-5xl font-primary heading-rule ${
                inverted ? "text-white heading-rule-light" : "text-primary"
              }`}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={`text-lg font-secondary mt-1 max-w-3xl ${
                  inverted ? "text-white/90" : "text-body"
                }`}
              >
                {description}
              </p>
            ) : null}
          </div>
          {programHref ? (
            <Link
              href={programHref}
              className={`btn font-primary text-lg ${inverted ? "btn-on-dark" : "btn-ghost"}`}
            >
              {programLabel ?? "About this program"}
            </Link>
          ) : null}
        </div>
        <TeamBanner src={photoSrc} alt={photoAlt ?? title} label={title} inverted={inverted} />
        {people.length === 0 ? (
          <p
            className={`font-secondary text-lg text-center mt-8 ${
              inverted ? "text-white/80" : "text-muted"
            }`}
          >
            {emptyMessage ?? "Officers for this group will be announced soon."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {people.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
