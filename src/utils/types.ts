export interface Leadership {
    name: string;
    major: string;
    linkedin: string;
    yearEntries: { // all of the entries (all positions held by that person over the years)
        [year: string]: { position: string, type: "Board" | "Officer" | "Intern"; }; // position for that year
    },
}