import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'product-count',
    templateUrl: 'product-count.component.html',
    styleUrls: ['product-count.component.css'],
    host: {}
})
export class ProductCountComponent implements OnInit {
     @Input() public value:BehaviorSubject<number>;
     @Input() public maxValue:number;
     @Input() public minValue:number;

    public textInput:FormControl;

    private _currentValue:number;

    constructor(){}

    ngOnInit() {
        this.value.subscribe((value:any)=>{
            this._currentValue = value;
        });
        this.maxValue = (typeof this.maxValue !== "undefined") ? this.maxValue : 100;
        this.minValue = (typeof this.minValue !== "undefined") ? this.minValue : 0;
        this.textInput = new FormControl(this._currentValue);
        this.textInput.valueChanges.debounceTime(700).subscribe((value)=>{
            if(this._validate(value)) {
                this.setNewValue(value);
            } else {
                this.setNewValue(this._currentValue);
            }
        })
    }

    public decrement():void {
        if(this._validate(this.textInput.value - 1)) {
            this.setNewValue(this.textInput.value - 1);
        }
    }

    public increment():void {
        if(this._validate(this.textInput.value + 1)) {
            this.setNewValue(this.textInput.value + 1);
        }
    }

    public setNewValue(newValue:number){
        this.textInput.setValue(newValue);
        this.value.next(newValue);
    }

    private _validate(newValue:number|string):boolean {
        if (typeof newValue === "string") {

            newValue = parseInt(newValue, 10);
            if (isNaN(newValue)) {
                return false;
            }
        }

        if(typeof newValue === "number") {

            if( newValue > this.maxValue ||
                newValue < this.minValue ) {
                return false;
            }
        }
        return true;
    }
}