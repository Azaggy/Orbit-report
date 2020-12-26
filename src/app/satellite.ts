import { NumberFormatStyle } from '@angular/common';
import { truncate } from 'fs';

export class Satellite {
    name: string;
    type: string;
    operational: boolean;
    orbitType: string;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() === "space debris") {
            return true;
        }
        return false;
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
