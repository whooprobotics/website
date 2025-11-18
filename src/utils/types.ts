export interface Leadership {
    id: number; //unique ID for each leadership member
    name: string;
    major: string;
    instagram: string;
    yearEntries: { // all of the entries (all positions held by that person over the years)
        [year: string]: { position: string }; // position for that year
    }
}