import {Injectable} from '@angular/core';
import {IOrderFormsStatuses} from "../custom-types/index";


@Injectable()
export class OrderFormService {
    public status:IOrderFormsStatuses = {
        buyer: {
            active: true
        },
        delivery: {
            active: false
        },
        pay: {
            active: false
        }
    };


    constructor() {

    }

    public setActive(name:string) {
        if(this.status[name].active) return;

        this.status[name].active = true;
        Object.keys(this.status).forEach((key:string)=>{
            if(key !== name) {
                this.status[key].active = false;
            }
        })
    }

}
