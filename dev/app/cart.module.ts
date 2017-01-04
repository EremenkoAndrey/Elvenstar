import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CartComponent } from './cart/cart.component';
import { BigCartComponent } from './big-cart/big-cart.component';
import { BigCartService } from './big-cart/big-cart.servise';
import { ProductCountComponent } from './product-count/product-count.component';
import { OrderFormComponent } from './orders-form/orders-form.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CartComponent,
        BigCartComponent,
        ProductCountComponent,
        OrderFormComponent,
        BuyerFormComponent
    ],
    exports: [
        CartComponent
    ],
    providers: [
        BigCartService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BigCartModule {}
