import {
  Leadership,
  LeadershipGroup,
  LeadershipType,
  LeadershipWithRole,
} from "@/src/utils/types";

export const CURRENT_YEAR = "2026-2027";

export const LEADERSHIP_GROUPS: LeadershipGroup[] = ["VEXU", "Combat", "Marketing"];

export const PROGRAM_HREFS: Record<LeadershipGroup, string> = {
  VEXU: "/vexu",
  Combat: "/combat",
  Marketing: "/marketing",
};

const BOARD_POSITION_ORDER = [
  "President",
  "Vice President of Operations",
  "Vice President of Marketing",
  "Vice President of Events",
  "Treasurer",
  "Webmaster",
  "Graduate Advisor",
];

export const leadership: Leadership[] = [

  /////////////////////
  // Former Officers //
  /////////////////////

  {
    name: "Michael Hesseltine",
    major: "Electronic Systems Engineering Technology '26",
    linkedin: "mhesseltine",
    yearEntries: {
      "2025-2026": { position: "President", type: "Board" },
    }
  },
  {
    name: "Evert Guzman",
    major: "Geology '24",
    linkedin: "evert-guzman-92b60919a",
    yearEntries: {
      "2025-2026": { position: "Secretary", type: "Board" },
    }
  },
  {
    name: "Daniel Kutch",
    major: "Masters in Mechanical Engineering",
    linkedin: "daniel-kutch-96735521b",
    yearEntries: {
      "2025-2026": { position: "WHOOP8 Hardware Lead", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Chris Martin",
    major: "Nuclear Engineering '28",
    linkedin: "",
    yearEntries: {
      "2025-2026": { position: "WHOOP8 Software Lead", type: "Officer", group: "VEXU" },
    },
  },

  /////////////////////
  // Former Interns //
  /////////////////////

  {
    name: "Mark Khoury",
    major: "Mechanical Engineering '29",
    linkedin: "markkhoury07",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Eddie Huang",
    major: "General Engineering '29",
    linkedin: "eddie-huang-527a3b381",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Ellis Miller",
    major: "General Engineering '29",
    linkedin: "ellis-h-miller-61093b324",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Farrah Davis",
    major: "Mechanical Engineering '29",
    linkedin: "farrahdavis",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Masaki Maruo",
    major: "Mechanical Engineering '28",
    linkedin: "masakimaruo",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Pierce Lowe",
    major: "Mechanical Engineering '28",
    linkedin: "piercelowe",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },
  {
    name: "Ryan Bruce",
    major: "Materials Science and Engineering '29",
    linkedin: "ryanthebruce",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
    },
  },

  ///////////////////
  // Current Board //
  ///////////////////

  {
    name: "Delaney Tao",
    major: "Biomedical Engineering '27",
    linkedin: "delaney-tao",
    yearEntries: {
      "2025-2026": { position: "Vice President", type: "Board" },
      "2026-2027": { position: "President", type: "Board" },
    }
  },
  {
    name: "Josh Steinshnider",
    major: "General Engineering '29",
    linkedin: "joshua-steinshnider-a23a04256",
    yearEntries: {
      "2025-2026": { position: "WHOOP8 Project Manager", type: "Officer", group: "VEXU" },
      "2026-2027": { position: "Vice President of Operations", type: "Board" },
    },
  },
  {
    name: "Natalie Kotch",
    major: "Interdisciplinary Engineering '26",
    linkedin: "natalie-kotch-a509b5260",
    yearEntries: {
      "2025-2026": { position: "Event Coordinator", type: "Board" },
      "2026-2027": { position: "Vice President of Operations", type: "Board" },
    }
  },
  {
    name: "Joseph Lumpkin",
    major: "Mechatronics, Robotics, and Automation Engineering '28",
    linkedin: "joseph-lumpkin-a77aab356",
    yearEntries: {
      "2025-2026": { position: "Jr. Secretary", type: "Board" },
    },
  },
  {
    name: "Ismael Merino",
    major: "Architecture '28",
    linkedin: "ismael-merino-074370352",
    yearEntries: {
      "2025-2026": { position: "Treasurer", type: "Board" },
      "2026-2027": { position: "Vice President of Marketing", type: "Board" },
    }
  },
  {
    name: "Eleanor Rhodes",
    major: "Nuclear Engineering '29",
    linkedin: "eleanor-rhodes-582a43383",
    yearEntries: {
      "2025-2026": { position: "Media Lead", type: "Officer", group: "Marketing" },
      "2026-2027": { position: "Vice President of Events", type: "Board" },
    },
  },
  {
    name: "Nikita Hansen",
    major: "Electrical Engineering '29",
    linkedin: "nikitashansen",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
      "2026-2027": { position: "Treasurer", type: "Board" },
    },
  },
  {
    name: "Akhil Kasamsetty",
    major: "Computer Science '28",
    linkedin: "akhil-kasamsetty",
    yearEntries: {
      "2025-2026": { position: "Webmaster", type: "Board" },
      "2026-2027": { position: "Webmaster", type: "Board" },
    }
  },
  {
    name: "Bradley Alexander Cougar Stiles",
    major: "Masters of Science in Engineering Technology",
    linkedin: "bradleyacstiles",
    yearEntries: {
      "2025-2026": { position: "Graduate Advisor", type: "Board" },
      "2026-2027": { position: "Graduate Advisor", type: "Board" },
    },
  },

  //////////////////////
  // Current Officers //
  //////////////////////

  {
    name: "Jesus Trejo",
    major: "Physics '27",
    linkedin: "jesus-trejo-0412742a7",
    yearEntries: {
      "2025-2026": { position: "WHOOP Project Manager", type: "Officer", group: "VEXU" },
      "2026-2027": { position: "WHOOP Sr. Project Manager", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Isaac Kalina",
    major: "General Engineering '29",
    linkedin: "isaacdkalina",
    yearEntries: {
      "2026-2027": { position: "WHOOP Project Manager", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Preston Thompson",
    major: "Mechanical Engineering '28",
    linkedin: "preston-thompson-31aa30323",
    yearEntries: {
      "2025-2026": { position: "WHOOP Hardware Lead", type: "Officer", group: "VEXU" },
      "2026-2027": { position: "WHOOP Sr. Hardware Lead", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Dan Sahaya",
    major: "Electrical Engineering '29",
    linkedin: "dansahaya",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
      "2026-2027": { position: "WHOOP Hardware Lead", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Sean Mahon",
    major: "Computer Engineering '27",
    linkedin: "seanmahon78",
    yearEntries: {
      "2025-2026": { position: "WHOOP Software Lead", type: "Officer", group: "VEXU" },
      "2026-2027": { position: "WHOOP Sr. Software Lead", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "Ethan Mikolaycik",
    major: "Computer Science '29",
    linkedin: "ethanmik",
    yearEntries: {
      "2025-2026": { position: "Intern", type: "Intern" },
      "2026-2027": { position: "WHOOP Software Lead", type: "Officer", group: "VEXU" },
    },
  },
  {
    name: "John Martinez",
    major: "Mechanical Engineering '29",
    linkedin: "johnamartinez13",
    yearEntries: {
      "2025-2026": { position: "WHOOP5 Project Manager", type: "Officer", group: "Combat" },
      "2026-2027": { position: "WHOOP5 Project Manager", type: "Officer", group: "Combat" },
    },
  },
  {
    name: "Muhammad Yousaf",
    major: "Electrical Engineering '28",
    linkedin: "my-yousaf",
    yearEntries: {
      "2025-2026": { position: "Underclassman Representative", type: "Board" },
      "2026-2027": { position: "WHOOP5 Project Manager", type: "Officer", group: "Combat" },
    },
  },
  {
    name: "Kirill Lutsenko",
    major: "Mechanical Engineering '29",
    linkedin: "kirill-lutsenko",
    yearEntries: {
      "2025-2026": { position: "WHOOP5 Hardware Lead", type: "Officer", group: "Combat" },
      "2026-2027": { position: "WHOOP5 Hardware Lead", type: "Officer", group: "Combat" },
    },
  },
  {
    name: "Hugo De La Garza",
    major: "Electrical Engineering '29",
    linkedin: "hugojdelagarza",
    yearEntries: {
      "2026-2027": { position: "WHOOP5 Electrical Lead", type: "Officer", group: "Combat" },
    },
  },
  {
    name: "Anthony Troiano",
    major: "General Engineering '29",
    linkedin: "anthonytroiano06",
    yearEntries: {
      "2026-2027": { position: "Internal Events Chair", type: "Officer", group: "Marketing" },
    },
  },
  {
    name: "Breanna Conejo",
    major: "Industrial Engineering '29",
    linkedin: "breannaconejo",
    yearEntries: {
      "2026-2027": { position: "Public Relations Chair", type: "Officer", group: "Marketing" },
    },
  },
  {
    name: "Sebastian Cuevas",
    major: "Civil Engineering '29",
    linkedin: "sebastian-cuevas-011663232",
    yearEntries: {
      "2026-2027": { position: "Sponsorship Chair", type: "Officer", group: "Marketing" },
    },
  },
  {
    name: "Connor McCormick",
    major: "Telecommunication Media '27",
    linkedin: "connork-mccormick",
    yearEntries: {
      "2025-2026": { position: "Media Lead", type: "Officer", group: "Marketing" },
      "2026-2027": { position: "Technical Media Lead", type: "Officer", group: "Marketing" },
    },
  },

  /////////////////////
  // Current Interns //
  /////////////////////

];

function withRole(person: Leadership, year: string): LeadershipWithRole | null {
  const entry = person.yearEntries[year];
  if (!entry) return null;
  return {
    ...person,
    position: entry.position,
    type: entry.type,
    group: entry.type === "Officer" ? entry.group : undefined,
  };
}

function boardSort(a: LeadershipWithRole, b: LeadershipWithRole) {
  const ai = BOARD_POSITION_ORDER.indexOf(a.position);
  const bi = BOARD_POSITION_ORDER.indexOf(b.position);
  const ao = ai === -1 ? 99 : ai;
  const bo = bi === -1 ? 99 : bi;
  if (ao !== bo) return ao - bo;
  return a.name.localeCompare(b.name);
}

export function getLeadership(year: string, type: LeadershipType): LeadershipWithRole[] {
  const people = leadership
    .map((person) => withRole(person, year))
    .filter((person): person is LeadershipWithRole => person !== null && person.type === type);

  if (type === "Board") {
    return people.sort(boardSort);
  }
  return people;
}

export function getOfficersByGroup(year: string): Record<LeadershipGroup, LeadershipWithRole[]> {
  const groups: Record<LeadershipGroup, LeadershipWithRole[]> = {
    VEXU: [],
    Combat: [],
    Marketing: [],
  };

  for (const officer of getLeadership(year, "Officer")) {
    if (officer.group) {
      groups[officer.group].push(officer);
    }
  }

  return groups;
}
