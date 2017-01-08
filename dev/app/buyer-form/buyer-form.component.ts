import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderFormService} from "../shared/orders-form.service";

@Component({
    styles: [`
        .ng-touched.ng-valid {
            border-color: #1a9900;
        }
        .ng-touched.ng-invalid {
            border-color: red;
    }`],
    selector: 'buyer-form',
    templateUrl: 'buyer-form.component.html'
})
export class BuyerFormComponent implements OnInit {
    public buyerInfo: FormGroup;

    constructor(public orderFormService: OrderFormService) {
        this.buyerInfo = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required,
                Validators.pattern(/.+@.+\..+/i),
                Validators.maxLength(50),
                Validators.minLength(5)]),
            phone: new FormControl()
        });
    }

    ngOnInit() { }

    public setActive(name:string) {
        this.orderFormService.setActive(name);
    }
}
