export interface IProduct {
    id: number
    title: string
    price: string
    image: string
    userName: string
    favourites?: boolean
    categoryId?: number
    description?: string
    count?: number
}


export interface ICategory {
    id: number
    title: string
    image: string
    products:IProduct[]
}

export interface IOrderCreate {
    id?: number | string,
    userId?: number,
    address?: string,
    typeDelivery?: string,
    phone?: string,
    name?: string,
    paymentMethod?: string,
    sum?:number,
    orderProducts:number[]
}
export interface IOrder {
    id?: number | string,
    userId?: number,
    address?: string,
    typeDelivery?: string,
    phone?: string,
    name?: string,
    paymentMethod?: string,
    sum?:number,
    orderProducts:IProduct[]
}