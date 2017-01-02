import { NgModule } from '@angular/core';
import { BigCartComponent } from './big-cart.component';
import { LangService } from '../services/lang.service';

@NgModule({
    declarations: [
        BigCartComponent
    ],
    providers: [
        LangService
    ],
    exports: [
        BigCartComponent
    ]
})
export class BigCartModule {}
