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

export interface IProducts {
    products: IProduct[]
}
export interface ICategory {
    id: number
    title: string
    image: string
    products:IProduct[]
}

export interface ICategories {
    categories: ICategory[]
}