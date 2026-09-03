export type LeadershipType = "Board" | "Officer" | "Intern";
export type LeadershipGroup = "VEXU" | "Combat" | "Marketing";

export type YearEntry =
    | { position: string; type: "Board" | "Intern" }
    | { position: string; type: "Officer"; group: LeadershipGroup };

export interface Leadership {
    name: string;
    major: string;
    linkedin: string;
    photo?: string;
    yearEntries: {
        [year: string]: YearEntry;
    };
}

export type LeadershipWithRole = Leadership & {
    position: string;
    type: LeadershipType;
    group?: LeadershipGroup;
    sort?: number;
};

export interface TeamPhoto {
    id: string;
    src?: string;
    alt: string;
    year: string;
    group: "org" | "board" | "officers" | "VEXU" | "Combat" | "Marketing";
}
