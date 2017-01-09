import {BehaviorSubject} from "rxjs/BehaviorSubject";

interface IBigCartItem {
    id: number,
    productid: number,
    name: string,
    quantity: number | BehaviorSubject<number>,
    url: string,
    imgSrc: string,
    price: number,
    available_quantity: number
}

interface IBigCart {
  items:IBigCartItem[],
  summ: number
}

interface IRegion {
    index: string,
    name: string
}

interface IRegion {
    index: string,
    name: string
}

interface IDeliveryService {
    id: number,
    name: string,
    minPrice: number | null,
    maxPrice: number | null,
    regions: string[],
    price: number
}

interface IPaySystem {
    id: number,
    name: string,
    deliveriesId: number[]
}

interface IOrderFormStatus {
    active?: boolean
}

interface IOrderFormsStatuses {
    buyer: IOrderFormStatus,
    delivery: IOrderFormStatus,
    pay: IOrderFormStatus
}
