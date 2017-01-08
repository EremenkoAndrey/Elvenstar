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

declare interface IRegion {
    index: string,
    name: string
}

declare interface IRegion {
    index: string,
    name: string
}

declare interface IDeliveryService {
    id: number,
    name: string,
    minPrice: number | null,
    maxPrice: number | null,
    regions: string[],
    price: number
}

declare interface IPaySystem {
    id: number,
    name: string,
    deliveriesId: number[]
}

declare interface IOrderFormStatus {
    active?: boolean
}

declare interface IOrderFormsStatuses {
    buyer: IOrderFormStatus,
    delivery: IOrderFormStatus,
    pay: IOrderFormStatus
}
