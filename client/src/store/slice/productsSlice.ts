import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/types";

interface IProductsState {
    countProducts: number
    productsInCart: IProduct[]
    // productsInCart:any
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
            state.productsInCart = action.payload
            state.countProducts = state.productsInCart.length
        },
        increment: (state: IProductsState, action: PayloadAction<IProduct>) => {
            const item = state.productsInCart.find((item: IProduct) => item.id === action.payload.id)
            if (item) {
                 item.count = item?.count && item?.count + 1

            } else {
                state.productsInCart.push({...action.payload, count: 1})
            }
            state.countProducts = state.productsInCart.length
            localStorage.setItem('products', JSON.stringify(state.productsInCart))
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
            localStorage.setItem('products', JSON.stringify(state.productsInCart))
        },
    },
});

export const {getProducts,increment, decrement} = products.actions;
export default products.reducer;
