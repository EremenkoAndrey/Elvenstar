import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { BigCartService } from './shared/big-cart.service';
import { DeliveryService } from './shared/delivery.service';

import { CartComponent } from './cart/cart.component';
import { BigCartComponent } from './big-cart/big-cart.component';
import { ProductCountComponent } from './product-count/product-count.component';
import { OrderFormComponent } from './orders-form/orders-form.component';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { DeliveryComponent } from './delivery/delivery.component';

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
        BuyerFormComponent,
        DeliveryComponent
    ],
    exports: [
        CartComponent
    ],
    providers: [
        BigCartService,
        DeliveryService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BigCartModule {}
