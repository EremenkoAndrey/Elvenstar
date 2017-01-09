import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

import {IPaySystem} from "../custom-types/index";
import {PAYSYSTEMS} from "../mock-data/paysystems";

@Injectable()
export class PaysystemService {

    public constructor() { }

    public get getPaysystems() {
        return Observable.create((observer: Observer<IPaySystem[]>) => {
            observer.next(PAYSYSTEMS);
            observer.complete();
        });
    }

}
