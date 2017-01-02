import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'product-count',
    templateUrl: 'product-count.component.html',
    styleUrls: ['product-count.component.css'],
    host: {}
})
export class ProductCountComponent implements OnInit {
     @Input() public value:number;
     @Input() public maxValue:number;
     @Input() public minValue:number;

     public textInput:FormControl;

    constructor(){}
    // Почему это работает здесь, но не работает в конструкторе? Как сделать, чтобы работало?
    ngOnInit() {
        this.value = (typeof this.value !== "undefined") ? this.value : 1;
        this.maxValue = (typeof this.maxValue !== "undefined") ? this.maxValue : 100;
        this.minValue = (typeof this.minValue !== "undefined") ? this.minValue : 0;
        this.textInput = new FormControl(this.value);
        this.textInput.valueChanges.debounceTime(700).subscribe((value)=>{
            if(this._validate(value)) {
                this.setNewValue(value);
            } else {
                this.setNewValue(this.value);
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
        this.value = newValue;
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