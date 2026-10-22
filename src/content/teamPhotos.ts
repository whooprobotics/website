import { TeamPhoto } from "@/src/utils/types";

/** Shared size of the 2026–2027 group photos (2048×1364, about 3:2). */
const PHOTO_26_27 = { width: 2048, height: 1364 };

export const teamPhotos: TeamPhoto[] = [
  {
    id: "org-26-27",
    year: "2026-2027",
    group: "org",
    alt: "The Aggie Robotics organization",
    src: "/team/org-26-27.jpg",
    ...PHOTO_26_27,
  },
  {
    id: "board-26-27",
    year: "2026-2027",
    group: "board",
    alt: "The Aggie Robotics board",
    src: "/team/board-26-27.jpg",
    ...PHOTO_26_27,
  },
  {
    id: "officer-26-27",
    year: "2026-2027",
    group: "officers",
    alt: "The Aggie Robotics officer team",
    src: "/team/officer-26-27.jpg",
    ...PHOTO_26_27,
  },
  {
    id: "whoop-26-27",
    year: "2026-2027",
    group: "VEXU",
    alt: "The WHOOP VEXU team",
    src: "/team/whoop-26-27.jpg",
    ...PHOTO_26_27,
  },
  {
    id: "acr-26-27",
    year: "2026-2027",
    group: "Combat",
    alt: "Aggie Combat Robotics",
    src: "/team/acr-26-27.jpg",
    ...PHOTO_26_27,
  },
  {
    id: "business-26-27",
    year: "2026-2027",
    group: "Business",
    alt: "The Aggie Robotics business team",
    src: "/team/business-26-27.jpg",
    ...PHOTO_26_27,
  },
];

export function getTeamPhoto(year: string, group: TeamPhoto["group"]): TeamPhoto | undefined {
  return teamPhotos.find((photo) => photo.year === year && photo.group === group);
}
