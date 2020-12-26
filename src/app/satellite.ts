import { truncate } from 'fs';

export class Satellite {
    name: string;
    type: string;
    operational: boolean;
    orbitType: string;
    launchDate: string;
    colorChange: boolean = true;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    // shouldShowWarning() {
    //     colorChange = false;
    //     if (this.type.toLowerCase() == "space debris"){
    //         let colorChange = true
    //         return colorChange
    //     }else {
    //         return false
    //     }
    // }
}
