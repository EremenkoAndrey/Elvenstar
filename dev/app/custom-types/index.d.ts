import {BehaviorSubject} from "rxjs/BehaviorSubject";

declare interface IBigCartItem {
    id: number,
    productid: number,
    name: string,
    quantity: number | BehaviorSubject<number>,
    url: string,
    imgSrc: string,
    price: number,
    available_quantity: number
}

declare interface IBigCart {
  items:IBigCartItem[],
  summ: number
}
