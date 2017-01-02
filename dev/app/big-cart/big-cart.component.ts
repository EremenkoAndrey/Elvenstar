import { Component } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
    selector: 'big-cart',
    templateUrl: 'big-cart.component.html',
    styleUrls: ['big-cart.component.css']
})
export class BigCartComponent {
    public lang:{};

    constructor(public langService:LangService) {

        this.lang = this.langService.phrases;
    }
}
