import { collectPaginatedAPI } from "@notionhq/client";
import { unstable_cache } from "next/cache";
import {
  BOARD_POSITION_ORDER,
  LEADERSHIP_GROUPS,
} from "@/src/content/leadership";
import {
  LeadershipGroup,
  LeadershipType,
  LeadershipWithRole,
} from "@/src/utils/types";
import {
  getDataSourceId,
  getNotionClient,
  isNotionConfigured,
  requireDatabaseId,
} from "./client";
import {
  asFullPage,
  getRelationIds,
  getRichText,
  getSelect,
  getTitle,
  getUrl,
  linkedinSlug,
} from "./properties";

const GROUPS = new Set<LeadershipGroup>(LEADERSHIP_GROUPS);
const TYPES = new Set<LeadershipType>(["Board", "Officer", "Intern"]);

function emptyGroups(): Record<LeadershipGroup, LeadershipWithRole[]> {
  return { VEXU: [], Combat: [], Marketing: [] };
}

function boardSort(a: LeadershipWithRole, b: LeadershipWithRole) {
  const ai = BOARD_POSITION_ORDER.indexOf(a.position);
  const bi = BOARD_POSITION_ORDER.indexOf(b.position);
  const ao = ai === -1 ? 99 : ai;
  const bo = bi === -1 ? 99 : bi;
  if (ao !== bo) return ao - bo;
  return a.name.localeCompare(b.name);
}

async function fetchPublishedLeadership(year: string): Promise<LeadershipWithRole[]> {
  if (!isNotionConfigured()) {
    if (process.env.NODE_ENV === "development") {
      throw new Error(
        "Notion is not configured. Set NOTION_TOKEN, NOTION_PEOPLE_DATABASE_ID, and NOTION_ROLES_DATABASE_ID."
      );
    }
    return [];
  }

  try {
    const notion = getNotionClient();
    const rolesDataSourceId = await getDataSourceId(requireDatabaseId("NOTION_ROLES_DATABASE_ID"));

    const rolePages = await collectPaginatedAPI(notion.dataSources.query, {
      data_source_id: rolesDataSourceId,
      filter: {
        and: [
          { property: "Year", select: { equals: year } },
          { property: "Published", checkbox: { equals: true } },
          {
            or: [
              { property: "Type", select: { equals: "Board" } },
              { property: "Type", select: { equals: "Officer" } },
            ],
          },
        ],
      },
    });

    const personIds = new Set<string>();
    const fullRoles = rolePages.map(asFullPage).filter((page) => page !== null);
    for (const role of fullRoles) {
      const ids = getRelationIds(role, "Officer");
      if (ids[0]) personIds.add(ids[0]);
    }

    const peopleById = new Map<
      string,
      { name: string; major: string; linkedin: string; photo?: string }
    >();

    await Promise.all(
      [...personIds].map(async (id) => {
        const page = asFullPage(await notion.pages.retrieve({ page_id: id }));
        if (!page) return;
        const photo = getRichText(page, "Photo");
        peopleById.set(id, {
          name: getTitle(page, "Name"),
          major: getRichText(page, "Major"),
          linkedin: linkedinSlug(getUrl(page, "LinkedIn")),
          photo: photo || undefined,
        });
      })
    );

    const results: LeadershipWithRole[] = [];
    for (const role of fullRoles) {
      const personId = getRelationIds(role, "Officer")[0];
      const person = personId ? peopleById.get(personId) : undefined;
      if (!person?.name) continue;

      const typeName = getSelect(role, "Type");
      if (!TYPES.has(typeName as LeadershipType) || typeName === "Intern") continue;

      const type = typeName as LeadershipType;
      const groupName = getSelect(role, "Group");
      const group = GROUPS.has(groupName as LeadershipGroup)
        ? (groupName as LeadershipGroup)
        : undefined;

      results.push({
        name: person.name,
        major: person.major,
        linkedin: person.linkedin,
        photo: person.photo,
        yearEntries: {},
        position: getTitle(role, "Position"),
        type,
        group: type === "Officer" ? group : undefined,
      });
    }

    return results;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      throw error;
    }
    console.error("Failed to load leadership from Notion", error);
    return [];
  }
}

function getPublishedLeadership(year: string): Promise<LeadershipWithRole[]> {
  return unstable_cache(
    () => fetchPublishedLeadership(year),
    ["leadership", year],
    { revalidate: 3600 }
  )();
}

export async function getLeadership(year: string, type: LeadershipType): Promise<LeadershipWithRole[]> {
  const people = (await getPublishedLeadership(year)).filter((person) => person.type === type);
  if (type === "Board") {
    return [...people].sort(boardSort);
  }
  return people;
}

export async function getOfficersByGroup(
  year: string
): Promise<Record<LeadershipGroup, LeadershipWithRole[]>> {
  const groups = emptyGroups();
  for (const officer of await getLeadership(year, "Officer")) {
    if (officer.group) {
      groups[officer.group].push(officer);
    }
  }
  return groups;
}
