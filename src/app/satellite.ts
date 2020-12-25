export class Satellite {
    name: string;
    type: string;
    operational: boolean;
    orbitType: string;
    launchDate: string;
    shouldShowWarning: boolean = true;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
}
// name: string;
// orbitType: string;
// type: string;
// operational: boolean;
// launchDate: string;
