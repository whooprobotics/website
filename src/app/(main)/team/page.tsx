import { Metadata } from "next";
import Image from "next/image";
import {
  CURRENT_YEAR,
  GROUP_DISPLAY_NAMES,
  LEADERSHIP_GROUPS,
  PROGRAM_HREFS,
} from "@/src/content/leadership";
import { getLeadership, getOfficersByGroup } from "@/src/lib/notion/leadership";
import { getTeamPhoto } from "@/src/content/teamPhotos";
import LeadershipGrid from "@/src/app/components/team/LeadershipGrid";
import TeamBanner from "@/src/app/components/team/TeamBanner";
import { pageMetadata } from "@/src/lib/seo";

export const revalidate = 60;

const EMPTY_MESSAGES: Record<string, string> = {
  Combat: "Aggie Combat Robotics officers will be announced soon.",
};

export default async function Team() {
  const board = await getLeadership(CURRENT_YEAR, "Board");
  const officersByGroup = await getOfficersByGroup(CURRENT_YEAR);
  const orgPhoto = getTeamPhoto(CURRENT_YEAR, "org");
  const boardPhoto = getTeamPhoto(CURRENT_YEAR, "board");
  const officersPhoto = getTeamPhoto(CURRENT_YEAR, "officers");

  return (
    <main className="flex flex-col justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-[22rem] overflow-hidden brand-band hero-scrim">
        {orgPhoto?.src ? (
          <Image
            src={orgPhoto.src}
            alt={orgPhoto.alt}
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0"
            priority
          />
        ) : null}
        <h1 className="relative z-10 text-6xl md:text-7xl font-primary font-bold text-white drop-shadow-2xl px-6 text-center">
          OUR TEAM
        </h1>
      </div>

      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col gap-5">
          <h2 className="text-4xl md:text-5xl font-primary text-primary heading-rule">LEADERSHIP</h2>
          <p className="text-lg font-secondary text-body max-w-3xl">
            Aggie Robotics is led by a Board of Directors and officers across VEXU — WHOOP, Aggie Combat Robotics, and Marketing.
            Meet the {CURRENT_YEAR} leadership team below.
          </p>
        </div>
      </section>

      <LeadershipGrid
        id="board"
        title="BOARD"
        description="The executive team that sets the direction of the organization."
        photoSrc={boardPhoto?.src}
        photoAlt={boardPhoto?.alt}
        people={board}
        tinted
      />

      <section id="officers" className="scroll-mt-24 w-full py-16 brand-band text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-primary heading-rule heading-rule-light">
              OFFICERS
            </h2>
            <p className="text-lg font-secondary text-white/90 mt-1 max-w-3xl">
              Officers lead day-to-day work in each program. Browse by group, or visit a program page to learn what that team does.
            </p>
          </div>
          <div className="mt-8">
            <TeamBanner
              src={officersPhoto?.src}
              alt={officersPhoto?.alt ?? "Officer team"}
              label="Officer Team"
              inverted
            />
          </div>
        </div>
      </section>

      {LEADERSHIP_GROUPS.map((group, index) => {
        const photo = getTeamPhoto(CURRENT_YEAR, group);
        const displayName = GROUP_DISPLAY_NAMES[group];
        return (
          <LeadershipGrid
            key={group}
            id={group.toLowerCase()}
            title={displayName.toUpperCase()}
            photoSrc={photo?.src}
            photoAlt={photo?.alt}
            people={officersByGroup[group]}
            programHref={PROGRAM_HREFS[group]}
            programLabel={`About ${displayName}`}
            emptyMessage={EMPTY_MESSAGES[group]}
            tinted={index % 2 === 1}
          />
        );
      })}
    </main>
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Team & Officers",
  description:
    "Meet the executive board and officers behind Aggie Robotics at Texas A&M University — the students leading VEX U, combat robotics, marketing, and outreach.",
  path: "/team",
  keywords: ["Aggie Robotics officers", "Aggie Robotics team", "Texas A&M robotics leadership"],
});
