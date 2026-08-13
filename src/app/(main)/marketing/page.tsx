import { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR, getOfficersByGroup } from "@/src/content/leadership";
import { getTeamPhoto } from "@/src/content/teamPhotos";
import PersonCard from "@/src/app/components/team/PersonCard";
import TeamBanner from "@/src/app/components/team/TeamBanner";

export default function Marketing() {
  const officers = getOfficersByGroup(CURRENT_YEAR).Marketing;
  const teamPhoto = getTeamPhoto(CURRENT_YEAR, "Marketing");

  return (
    <main className="flex flex-col justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-35 overflow-hidden">
        <h1 className="relative z-10 text-7xl font-primary text-black">MARKETING</h1>
      </div>

      <div className="flex flex-col justify-center w-full py-16 bg-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-6 md:mx-10 items-center">
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-5xl font-primary">WHAT WE DO</h2>
            <p className="text-lg font-secondary">
              The Marketing team supports Aggie Robotics competition programs and grows the organization.
              We plan events, create graphics, run social media, staff Aggie Robotics booths at campus and
              community events, help with recruitment, and design team merchandise including t-shirts.
            </p>
          </div>
          <TeamBanner
            src={teamPhoto?.src}
            alt={teamPhoto?.alt ?? "Marketing team"}
            label="Marketing Team"
            inverted
          />
        </div>
      </div>

      <section className="w-full py-12">
        <div className="mx-6 md:mx-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-5xl font-primary text-primary">MEET THE OFFICERS</h2>
              <p className="text-lg font-secondary mt-3 max-w-3xl">
                Marketing officers lead events, public relations, sponsorship, and media. The full team
                appears in the photo above.
              </p>
            </div>
            <Link
              href="/team#marketing"
              className="font-primary text-xl text-primary hover:scale-105 transition-transform"
            >
              See all leadership
            </Link>
          </div>
          {officers.length === 0 ? (
            <p className="font-secondary text-lg text-center text-gray-600">
              Marketing officers will be announced soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {officers.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Aggie Robotics - Marketing",
  description:
    "The marketing team of Aggie Robotics at Texas A&M University — events, graphics, social media, booths, recruitment, and merchandise.",
};
