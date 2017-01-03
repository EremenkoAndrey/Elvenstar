import {Component, OnInit} from '@angular/core';
import {LangService} from '../shared/lang.service';
import {BigCartService} from "./big-cart.servise";

import {IBigCart, IBigCartItem} from "../custom-types/index";

@Component({
    selector: 'big-cart',
    templateUrl: 'big-cart.component.html',
    styleUrls: ['big-cart.component.css']
})
export class BigCartComponent implements OnInit {
    public lang: {};
    public result: IBigCart = {
        summ: 0,
        items: []
    };

    constructor(public langService: LangService,
                public bigCartService: BigCartService) {}

    ngOnInit() {
        this.lang = this.langService.phrases;

        this.bigCartService.getResult()
            .subscribe((result: IBigCart) => {

                this.result.items = result.items;

                this.result.items.forEach((item:IBigCartItem)=>{
                    if (typeof item.quantity !== "number") {
                        item.quantity.subscribe(() => {
                            this.result.summ = this.bigCartService.getSumm(this.result.items);
                          })
                    }
                });

            });
    }

    deleteItem(id:number){
        this.result.items = this.result.items.filter((item:IBigCartItem)=>{
            return item.id !== id;;
        });
        this.result.summ = this.bigCartService.getSumm(this.result.items);
    }
}
