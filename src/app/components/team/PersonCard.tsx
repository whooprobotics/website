import Image from "next/image";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { LeadershipWithRole } from "@/src/utils/types";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function PersonCard({ person }: { person: LeadershipWithRole }) {
  return (
    <article className="flex flex-col items-center text-center gap-2 p-4">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name}
          width={400}
          height={400}
          className="w-40 h-40 object-cover rounded-full"
        />
      ) : (
        <div
          className="w-40 h-40 rounded-full bg-primary text-white flex items-center justify-center font-primary text-4xl"
          aria-hidden="true"
        >
          {initials(person.name)}
        </div>
      )}
      <h3 className="font-primary text-2xl mt-2">{person.name}</h3>
      <p className="font-secondary text-primary font-bold">{person.position}</p>
      <p className="font-secondary text-sm text-gray-600">{person.major}</p>
      {person.linkedin ? (
        <a
          href={`https://www.linkedin.com/in/${person.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:scale-110 transition-transform"
          aria-label={`${person.name} on LinkedIn`}
        >
          <RiLinkedinBoxFill className="w-6 h-6" />
        </a>
      ) : null}
    </article>
  );
}
