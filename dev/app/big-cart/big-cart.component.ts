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
                public bigCartService: BigCartService) {
    }

    ngOnInit() {
        this.lang = this.langService.phrases;

        this.bigCartService.getResult()
            .subscribe((result: any) => {

                result.items.subscribe((item: IBigCartItem) => {

                    this.result.items.push(item);

                    if (typeof item.quantity !== "number") {
                        item.quantity.subscribe(() => {
                            this.bigCartService.getSumm(result.items)
                                .subscribe((summ: number) => {
                                    this.result.summ = summ;
                                });
                        })
                    }
                });

            });
    }
}
