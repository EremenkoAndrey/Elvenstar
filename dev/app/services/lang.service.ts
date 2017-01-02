import { Injectable } from '@angular/core';

const phrases = {
    'goods': 'Товар',
    'quantity': 'Количество',
    'price': 'Цена'
};

@Injectable()
export class LangService {
    public get phrases(){
        return phrases;
    }
}
