import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {IBigCart, IBigCartItem} from "../custom-types/index";

import {BIGCART} from "../mock-data/big-cart-data";


@Injectable()
export class BigCartService {
    public listenSummChange = new BehaviorSubject(0);

    public getResult() {
        let json = this.getJSON;

        return json.map((data) => {
            let res = {
                summ: data.summ,
                items: data.items
            };
            res.items.forEach((item: IBigCartItem) => {
                let count: number = 1;
                if (typeof item.quantity === "number") {
                    count = item.quantity;
                }
                item.quantity = new BehaviorSubject(count);
            });

            return res;
        });

    }

    private get getJSON():Observable<IBigCart>{
        return Observable.create((observer: Observer<IBigCart>) => {
            observer.next(BIGCART);
            observer.complete();
        });
    }

    public calculateSumm(items: IBigCartItem[]) {
        let result = items.reduce((summ, item) => {
            let quantity: number;

            if (typeof item.quantity !== "number") {
                item.quantity.subscribe((quant: number) => {
                    quantity = quant;
                })
            } else {
                quantity = item.quantity;
            }
            return summ + ( quantity * item.price);
        }, 0);

        this.listenSummChange.next(result);

        return result;
    }

}
