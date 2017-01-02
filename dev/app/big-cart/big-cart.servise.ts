import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

import { BIGCART } from "../mock-data/big-cart-data";

@Injectable()
export class BigCartService {
    public result:IBigCart;

    constructor(){
    }

    public get getJson():Observable<IBigCart>{
        return Observable.create((observer:Observer<IBigCart>)=> {
            observer.next(BIGCART);
            observer.complete();
        });
        // Эта не нужная фигня почему-то работает без импорта from
        //var t = Observable.from([1,2,2,2,]);
        //console.log(t);
    }
}
