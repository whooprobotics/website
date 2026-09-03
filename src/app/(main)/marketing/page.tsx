import { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR } from "@/src/content/leadership";
import { getOfficersByGroup } from "@/src/lib/notion/leadership";
import { getTeamPhoto } from "@/src/content/teamPhotos";
import PageHeader from "@/src/app/components/PageHeader";
import PersonCard from "@/src/app/components/team/PersonCard";
import TeamBanner from "@/src/app/components/team/TeamBanner";
import { pageMetadata } from "@/src/lib/seo";

export const revalidate = 60;

export default async function Marketing() {
  const officers = (await getOfficersByGroup(CURRENT_YEAR)).Marketing;
  const teamPhoto = getTeamPhoto(CURRENT_YEAR, "Marketing");

  return (
    <main className="flex flex-col justify-center">
      <PageHeader title="MARKETING" />

      <section className="w-full brand-band py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-4xl md:text-5xl font-primary heading-rule heading-rule-light">
              WHAT WE DO
            </h2>
            <p className="text-lg font-secondary text-white/90 max-w-2xl">
              The Marketing team supports Aggie Robotics competition programs and grows the organization.
              We plan events, create graphics, run social media, staff Aggie Robotics booths at campus and
              community events, help with recruitment, and design team merchandise including t-shirts.
            </p>
          </div>
          <div>
            <TeamBanner
              src={teamPhoto?.src}
              alt={teamPhoto?.alt ?? "Marketing team"}
              label="Marketing Team"
              inverted
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">
                MEET THE OFFICERS
              </h2>
              <p className="text-lg font-secondary text-body mt-1 max-w-2xl">
                Marketing officers lead events, public relations, sponsorship, and media. The full team
                appears in the photo above.
              </p>
            </div>
            <Link href="/team#marketing" className="btn btn-ghost font-primary text-lg">
              See all leadership
            </Link>
          </div>
          {officers.length === 0 ? (
            <p className="font-secondary text-lg text-center text-muted">
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

export const metadata: Metadata = pageMetadata({
  title: "Marketing",
  description:
    "The marketing team of Aggie Robotics at Texas A&M University runs events, graphics, social media, booths, recruitment, and merchandise for the organization.",
  path: "/marketing",
});
