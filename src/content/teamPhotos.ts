import { TeamPhoto } from "@/src/utils/types";

export const teamPhotos: TeamPhoto[] = [
  {
    id: "org-26-27",
    year: "2026-2027",
    group: "org",
    alt: "The Aggie Robotics organization",
    src: "/team/org-26-27.jpg",
  },
  {
    id: "board-26-27",
    year: "2026-2027",
    group: "board",
    alt: "The Aggie Robotics board",
    src: "/team/board-26-27.jpg",
  },
  {
    id: "officer-26-27",
    year: "2026-2027",
    group: "officers",
    alt: "The Aggie Robotics officer team",
    src: "/team/officer-26-27.JPG",
  },
  {
    id: "whoop-26-27",
    year: "2026-2027",
    group: "VEXU",
    alt: "The WHOOP VEXU team",
    src: "/team/whoop-26-27.JPG",
  },
  {
    id: "acr-26-27",
    year: "2026-2027",
    group: "Combat",
    alt: "Aggie Combat Robotics",
    src: "/team/acr-26-27.JPG",
  },
  {
    id: "business-26-27",
    year: "2026-2027",
    group: "Marketing",
    alt: "The Aggie Robotics business team",
    src: "/team/business-26-27.JPG",
  },
];

export function getTeamPhoto(year: string, group: TeamPhoto["group"]): TeamPhoto | undefined {
  return teamPhotos.find((photo) => photo.year === year && photo.group === group);
}
