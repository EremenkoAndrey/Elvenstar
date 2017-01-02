import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { BigCartComponent } from './big-cart.component';
import { ProductCountComponent } from './../product-count/product-count.component';
import { BigCartService } from './big-cart.servise';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        BigCartComponent,
        ProductCountComponent
    ],
    exports: [
        BigCartComponent
    ],
    providers: [
        BigCartService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BigCartModule {}
