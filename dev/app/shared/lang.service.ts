import { Injectable } from '@angular/core';

const phrases = {
    'goods': 'Товар',
    'quantity': 'Количество',
    'price': 'Цена',
    'continue': 'Оформить заказ',
    'intotal': 'Итого:',
    'deleteDoods': 'Удалить товар из корзины'
};

@Injectable()
export class LangService {
    public get phrases(){
        return phrases;
    }
}
