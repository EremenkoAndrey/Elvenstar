import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/filter";

import {DeliveryService} from "../shared/delivery.service";
import {OrderFormService} from "../shared/orders-form.service";
import {BigCartService} from "../shared/big-cart.service";
import {LangService} from '../shared/lang.service';
import {IRegion, IDeliveryService} from "../custom-types/index";


@Component({
    selector: 'delivery-form',
    templateUrl: 'delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    public deliveryForm: FormGroup;
    public regions: IRegion[];
    public activeDeliveries: IDeliveryService[] = [];
    public deliveriesList: Observable<IDeliveryService>;
    public lang: {};

    private selectedRegion: string;
    private currentSumm: number;

    public constructor(public langService: LangService,
                private _formBuilder:FormBuilder,
                public deliveryService:DeliveryService,
                public bigCartService: BigCartService,
                public orderFormService: OrderFormService) {

        this.lang = this.langService.phrases;

        this.deliveryForm = _formBuilder.group({
            region: ['', deliveryService.noEmptyStringValidator],
            zip: [],
            deliveries: ['', Validators.required]
        });
    }

    public ngOnInit() {
        this.deliveryService.getRegions.subscribe((regions:IRegion[])=>{
            this.regions = regions;
        });
        this.deliveryService.getDeliveries.subscribe((deliveries:IDeliveryService[])=>{
            this.deliveriesList = Observable.from(deliveries);
        });

        this.deliveryForm.get('deliveries').valueChanges.subscribe((selectedDeliveryId:string | null)=>{
            this.deliveryService.activeDelivery.next(selectedDeliveryId);
        });

        this.deliveryForm.get('region').valueChanges.subscribe((regionId:string)=>{
            this.selectedRegion = regionId;
            this.deliveryForm.get('deliveries').reset();
            if(!this.currentSumm) return;

            this.selectDeliveries();
        });

        this.bigCartService.listenSummChange.subscribe((newSumm: number) => {
            this.currentSumm = newSumm;
            if(!this.selectedRegion) return;

            this.selectDeliveries();
        });

    }

    public selectDeliveries(){
        let updatedDeliveries:IDeliveryService[] = [];

        this.deliveriesList
            .filter((deliveryServise: IDeliveryService) => {
                let maxPriceAccess: boolean = (deliveryServise.maxPrice) ? deliveryServise.maxPrice >= this.currentSumm : true;
                if(!maxPriceAccess) return false;

                let minPriceAccess: boolean = (deliveryServise.minPrice) ? deliveryServise.minPrice <= this.currentSumm : true;
                if(!minPriceAccess) return false;

                let regionAccess: boolean = deliveryServise.regions.indexOf(this.selectedRegion) !== -1;
                if(!regionAccess) return false;

                return true;
            })
            .subscribe((deliveryService: IDeliveryService) => {
                updatedDeliveries.push(deliveryService);
            }, ()=>{}, ()=>{
                this.activeDeliveries = updatedDeliveries;
            });
    }

    public setActive(name:string) {
        this.orderFormService.setActive(name);
    }

}
