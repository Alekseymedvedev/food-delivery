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
        decrement: (state: IProductsState, action: PayloadAction<IProduct>) => {
            const item = state.productsInCart.find((item: IProduct) => item.id === action.payload.id)
            if ( item?.count !== 1) {
                if(item ) item.count = item?.count && item?.count - 1
            } else {
                alert('Удалить')
                const index = state.productsInCart.indexOf(item && item)
                state.productsInCart.splice(index, 1)
            }
            state.countProducts = state.productsInCart.length
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
        },
   
    addProductToCart: (state: IProductsState, action: PayloadAction<IProduct>) => {
        const localValue = localStorage.getItem('productsInCart')
        const arr =  JSON.parse(localValue ? localValue : '[]') ?? []
        const existingProduct = state.productsInCart.find(product => product.id === action.payload.id);
        if (existingProduct) {
            existingProduct.count = (existingProduct.count || 0) + 1;
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
        } else {
            const newProduct = { ...action.payload, count: 1 };
            state.productsInCart = [...state.productsInCart, newProduct];
            localStorage.setItem('productsInCart', JSON.stringify([...arr,newProduct]));
        }
    },
    },
   
});

export const {getProducts,addProductToCart, decrement} = products.actions;
export default products.reducer;
