import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

import {DeliveryService} from "../shared/delivery.service";
import {PaysystemService} from "../shared/paysystem.service";
import {IPaySystem} from "../custom-types/index";


@Component({
    selector: 'pay-system',
    templateUrl: 'paysystem.component.html'
})
export class PaysystemComponent implements OnInit {
    public paysystems: Observable<IPaySystem>;
    private activePaysystems: IPaySystem[];
    public paySystemsForm: FormGroup;

    constructor(public deliveryService:DeliveryService,
                public paysystemService:PaysystemService) {
        this.paySystemsForm = new FormGroup({
            paySystems: new FormControl('', Validators.required)
        });

    }

    ngOnInit() {
        this.paysystemService.getPaysystems.subscribe((paysystems:IPaySystem[])=>{
            this.paysystems = Observable.from(paysystems);
        });

        this.deliveryService.activeDelivery.subscribe((selectedDeliveryValue:string | null)=>{
            if(selectedDeliveryValue === null){
                this.paySystemsForm.reset();
                return;
            }

            let deliveryId:number = parseInt(selectedDeliveryValue);

            if(isNaN(deliveryId)) {
                throw new Error('PaysystemComponent: delivery Id is NaN');
            } else {
                this.updatePaySystemsList(deliveryId);
            }

        });

    }

    private updatePaySystemsList(deliveryId: number) {
        let newPaySystemsSet: IPaySystem[] = [];

        this.paysystems
            .filter((paysystem: IPaySystem) => {
                return paysystem.deliveriesId.indexOf(deliveryId) !== -1;
            })
            .subscribe((paysystem: IPaySystem) => {
                newPaySystemsSet.push(paysystem);
            }, () => {
            }, () => {
                this.activePaysystems = newPaySystemsSet;
            });
    }
    
}
