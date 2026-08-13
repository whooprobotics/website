import { LeadershipGroup } from "@/src/utils/types";

export const CURRENT_YEAR = process.env.LEADERSHIP_YEAR ?? "2026-2027";

export const LEADERSHIP_GROUPS: LeadershipGroup[] = ["VEXU", "Combat", "Marketing"];

export const PROGRAM_HREFS: Record<LeadershipGroup, string> = {
  VEXU: "/vexu",
  Combat: "/combat",
  Marketing: "/marketing",
};

export const BOARD_POSITION_ORDER = [
  "President",
  "Vice President of Operations",
  "Vice President of Marketing",
  "Vice President of Events",
  "Treasurer",
  "Webmaster",
  "Graduate Advisor",
];
