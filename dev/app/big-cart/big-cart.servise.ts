import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observer} from "rxjs/Observer";

import {IBigCart, IBigCartItem} from "../custom-types/index";

import {BIGCART} from "../mock-data/big-cart-data";


interface IResult {
    items: Observable<IBigCartItem>,
    summ: number
}

@Injectable()
export class BigCartService {

    constructor() {}

    public getResult() {
        let json = this.getJSON;

        return json.mergeMap((data: IBigCart) => {
            let saveLinkToItem:IBigCartItem;

            return Observable.of(data).map((data)=>{
                let res = {
                    summ: data.summ,
                    items: Observable.from(data.items)
                };
                res.items.map((item)=>{
                    saveLinkToItem = item;
                    return new BehaviorSubject(item.quantity)
                }).subscribe((quantitySubject:BehaviorSubject<number>)=>{
                    saveLinkToItem.quantity = quantitySubject;
                });

                return res;
            });
        });

    }

    private get getJSON():Observable<IBigCart>{
        return Observable.create((observer: Observer<IBigCart>) => {
            observer.next(BIGCART);
            observer.complete();
        });
    }

    public getSumm(items:Observable<IBigCartItem>) {
        return items.reduce((summ, item) => {
                let quantity: number;

                if (typeof item.quantity !== "number") {
                    item.quantity.subscribe((quant: number) => {
                        quantity = quant;
                    })
                } else {
                    quantity = item.quantity;
                }
                return summ + ( quantity * item.price)
            }, 0);

    }

}
