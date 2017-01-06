import { Injectable } from '@angular/core';

const phrases = {
    'goods': 'Товар',
    'quantity': 'Количество',
    'price': 'Цена',
    'continue': 'Оформить заказ',
    'intotal': 'Итого:',
    'deleteGoods': 'Удалить товар из корзины',
    'selectRegion': 'Выберите регион'
};

@Injectable()
export class LangService {
    public get phrases(){
        return phrases;
    }
}
