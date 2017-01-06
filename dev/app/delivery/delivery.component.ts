import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/filter";

import {DeliveryService} from "../shared/delivery.service";
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

    constructor(public langService: LangService,
                private _formBuilder:FormBuilder,
                private _deliveryService:DeliveryService,
                public bigCartService: BigCartService) {

        this.lang = this.langService.phrases;

        this._deliveryService = _deliveryService;
        this.deliveryForm = _formBuilder.group({
            region: ['', _deliveryService.noEmptyStringValidator],
            zip: [],
            deliveries: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._deliveryService.getRegions.subscribe((regions:IRegion[])=>{
            this.regions = regions;
        });
        this._deliveryService.getDeliveries.subscribe((deliveries:IDeliveryService[])=>{
            this.deliveriesList = Observable.from(deliveries);
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

}
