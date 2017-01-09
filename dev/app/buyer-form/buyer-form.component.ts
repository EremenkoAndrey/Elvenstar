import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {OrderFormService} from "../shared/orders-form.service";

@Component({
    selector: 'buyer-form',
    templateUrl: 'buyer-form.component.html',
    styleUrls: ['buyer-form.component.css']
})
export class BuyerFormComponent implements OnInit {
    public buyerInfo: FormGroup;

    public constructor(private _formBuilder:FormBuilder,
                       public orderFormService: OrderFormService) {
        this.buyerInfo = _formBuilder.group({
            name: [null, Validators.required],
            email: [null, [Validators.required,
                Validators.pattern(/.+@.+\..+/i),
                Validators.maxLength(50),
                Validators.minLength(5)]
            ],
            phone: [null]
        });
    }

    public ngOnInit() { }

    public setActive(name:string) {
        this.orderFormService.setActive(name);
    }
}
