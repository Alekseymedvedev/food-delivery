import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/types";

interface IProductsState {
    countProducts: number
    productsInCart: IProduct[]
};

const initialState: IProductsState = {
    countProducts: 0,
    productsInCart: []
};

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state: IProductsState, action: PayloadAction<IProduct[]>) => {
            state.productsInCart = [...action.payload]
        },
        addProductToCart: (state: IProductsState, action: PayloadAction<IProduct>) => {
            const localValue = localStorage.getItem('productsInCart')
            const arr: IProduct[] = JSON.parse(localValue ? localValue : '[]') ?? []
            const existingProduct = arr && arr.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.count = existingProduct.count +1;
                localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
            } else {
                state.productsInCart = [...state.productsInCart, action.payload];
                localStorage.setItem('productsInCart', JSON.stringify([...arr, action.payload]));
            }
        },
        decrement: (state: IProductsState, action: PayloadAction<IProduct>) => {
            const item = state.productsInCart.find((item: IProduct) => item.id === action.payload.id)
            if (item?.count !== 1) {
                if (item) item.count = item?.count && item?.count - 1
            } else {
                alert('Удалить')
                const index = state.productsInCart.indexOf(item && item)
                state.productsInCart.splice(index, 1)
            }
            state.countProducts = state.productsInCart.length
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
        },
    },
});

export const {getProducts, addProductToCart, decrement} = products.actions;
export default products.reducer;
