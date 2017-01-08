import { Component, OnInit } from '@angular/core';

import {OrderFormService} from "./../shared/orders-form.service";
import {IOrderFormsStatuses} from "../custom-types/index";

@Component({
    selector: 'orders-form',
    templateUrl: 'orders-form.component.html',
    styleUrls: ['orders-form.component.css']
})
export class OrderFormComponent implements OnInit {
    public status: IOrderFormsStatuses;

    constructor(public orderFormService: OrderFormService) {
            this.status = this.orderFormService.status;
    }

    ngOnInit() {}


}
