import {IBigCart} from "../custom-types/index";

export const BIGCART:IBigCart = {
    items: [
        {
            id: 159,
            productid: 3571,
            name: 'Брелок "Вырастая - крепнем!" (Тиреллы)',
            quantity: 14,
            url: '/catalog/item/keychain-growing-strong-the-tyrells/',
            imgSrc: 'images/1tirel.jpg',
            price: 790,
            available_quantity: 20
        }, {
            id: 163,
            productid: 3571,
            name: '"Монета Безликого" (Valar Morghulis)',
            quantity: 1,
            url: '/catalog/item/coin-of-the-faceless-valar-morgulis/',
            imgSrc: 'images/2unface.jpg',
            price: 490,
            available_quantity: 2
        }, {
            id: 200,
            productid: 3471,
            name: 'Еще товар',
            quantity: 3,
            url: '/catalog/item/',
            imgSrc: 'images/2unface.jpg',
            price: 50,
            available_quantity: 5
        }
    ],
    summ: 1280
};
