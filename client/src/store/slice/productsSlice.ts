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
        // increment: (state: IProductsState, action: PayloadAction<IProduct>) => {
        //     const item = state.productsInCart.find((item: IProduct) => item.id === action.payload.id)
        //     if (item) {
        //         console.log('item',item)
        //          item.count = item?.count && item?.count + 1
        //     } else {
        //         console.log('item',JSON.parse(JSON.stringify(state.productsInCart)))
        //         state.productsInCart = [...state.productsInCart, {...action.payload, count: 1}]
        //     }
        //     state.countProducts = state.productsInCart.length
        //     localStorage.setItem('products', JSON.stringify(state.productsInCart))
        // },
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
    // addProductToCart: (state: IProductsState, action: PayloadAction<IProduct>) => {
    //     const existingProduct = state.productsInCart.find(product => product.id === action.payload.id);
    //     if (existingProduct) {
    //         existingProduct.count = (existingProduct.count || 0) + 1;
    //     } else {
    //         const newProduct = { ...action.payload, count: 1 };
    //         state.productsInCart.push(newProduct);
    //     }
    //     state.countProducts = state.productsInCart.reduce((total, product) => total + (product.count || 0), 0);
    //     localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    // },
    addProductToCart: (state: IProductsState, action: PayloadAction<IProduct>) => {
        const existingProduct = state.productsInCart.find(product => product.id === action.payload.id);
        if (existingProduct) {
            existingProduct.count = (existingProduct.count || 0) + 1;
        } else {
            const newProduct = { ...action.payload, count: 1 };
            state.productsInCart = [...state.productsInCart, newProduct];
        }
        state.countProducts = state.productsInCart.reduce((total, product) => total + (product.count || 0), 0);
        localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    },
   
});

export const {getProducts,addProductToCart, decrement} = products.actions;
export default products.reducer;
