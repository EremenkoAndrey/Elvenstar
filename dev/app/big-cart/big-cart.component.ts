import { Component, OnInit } from '@angular/core';
import { LangService } from '../shared/lang.service';
import {BigCartService} from "./big-cart.servise";

@Component({
    selector: 'big-cart',
    templateUrl: 'big-cart.component.html',
    styleUrls: ['big-cart.component.css']
})
export class BigCartComponent implements OnInit {
    public lang:{};
    public result:IBigCart;

    constructor(public langService:LangService,
                public bigCartService: BigCartService){

        this.lang = this.langService.phrases;
    }

    ngOnInit() {
        this.bigCartService.getJson.subscribe((data:IBigCart)=>{
            this.result = data;
        });
    }
}
