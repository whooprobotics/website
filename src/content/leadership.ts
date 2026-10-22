import { LeadershipGroup } from "@/src/utils/types";

export const CURRENT_YEAR = process.env.LEADERSHIP_YEAR ?? "2026-2027";

export const LEADERSHIP_GROUPS: LeadershipGroup[] = ["VEXU", "Combat", "Business"];

export const PROGRAM_HREFS: Record<LeadershipGroup, string> = {
  VEXU: "/vexu",
  Combat: "/combat",
  Business: "/business",
};

export const GROUP_DISPLAY_NAMES: Record<LeadershipGroup, string> = {
  VEXU: "VEXU — WHOOP",
  Combat: "Aggie Combat Robotics",
  Business: "Business",
};
