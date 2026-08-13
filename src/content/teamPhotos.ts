import { TeamPhoto } from "@/src/utils/types";

export const teamPhotos: TeamPhoto[] = [
  {
    id: "org-25-26",
    year: "2026-2027",
    group: "org",
    alt: "The Aggie Robotics organization",
    src: "/team/org-25-26.png",
  },
  {
    id: "board-25-26",
    year: "2026-2027",
    group: "board",
    alt: "The Aggie Robotics board",
  },
  {
    id: "officer-25-26",
    year: "2026-2027",
    group: "officers",
    alt: "The Aggie Robotics officer team",
    src: "/team/officer-25-26.JPG",
  },
  {
    id: "whoop-25-26",
    year: "2026-2027",
    group: "VEXU",
    alt: "The Aggie Robotics VEXU team",
    src: "/team/whoop-25-26.JPG",
  },
  {
    id: "acr-25-26",
    year: "2026-2027",
    group: "Combat",
    alt: "The Aggie Robotics combat team",
    src: "/team/acr-25-26.JPG",
  },
  {
    id: "marketing-25-26",
    year: "2026-2027",
    group: "Marketing",
    alt: "The Aggie Robotics marketing team",
    src: "/team/marketing-25-26.JPG",
  },
];

export function getTeamPhoto(year: string, group: TeamPhoto["group"]): TeamPhoto | undefined {
  return teamPhotos.find((photo) => photo.year === year && photo.group === group);
}
