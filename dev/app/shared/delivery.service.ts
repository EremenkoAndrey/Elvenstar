import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {FormControl} from "@angular/forms";

import {REGIONS} from "../mock-data/regions";
import {DELIVERYSERVCES} from "../mock-data/deliveryService";
import {IRegion, IDeliveryService} from "../custom-types/index";


@Injectable()
export class DeliveryService {

    constructor() {
    }

    public get getRegions() {
        return Observable.create((observer: Observer<IRegion[]>) => {
            observer.next(REGIONS);
            observer.complete();
        });
    }

    public get getDeliveries() {
        return Observable.create((observer: Observer<IDeliveryService[]>) => {
            observer.next(DELIVERYSERVCES);
            observer.complete();
        });
    }

    public noEmptyStringValidator(control: FormControl): {[key: string]: boolean} {
        const value = control.value || '';
        const valid = value.length > 0;
        return valid ? null : {region: true}
    }

}

