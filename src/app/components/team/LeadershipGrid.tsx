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
}: LeadershipGridProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 w-full py-12 ${inverted ? "bg-primary text-white" : ""}`}
    >
      <div className="mx-6 md:mx-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className={`text-5xl font-primary ${inverted ? "text-white" : "text-primary"}`}>
              {title}
            </h2>
            {description ? (
              <p className="text-lg font-secondary mt-3 max-w-3xl">{description}</p>
            ) : null}
          </div>
          {programHref ? (
            <Link
              href={programHref}
              className={`font-primary text-xl hover:scale-105 transition-transform ${
                inverted ? "text-white" : "text-primary"
              }`}
            >
              {programLabel ?? "About this program"}
            </Link>
          ) : null}
        </div>
        <TeamBanner src={photoSrc} alt={photoAlt ?? title} label={title} />
        {people.length === 0 ? (
          <p className={`font-secondary text-lg text-center mt-8 ${inverted ? "text-white/80" : "text-gray-600"}`}>
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
