import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/types";
import {find} from "@reduxjs/toolkit/dist/utils";
// localStorage.setItem('products', JSON.stringify([]))
const local =localStorage.getItem('products')
const data = local && JSON.parse(local)
// const data:any = []

interface IProductsState {
   countProducts:number
    productsInCart:IProduct[] | undefined
    // productsInCart:any
};

const initialState: IProductsState = {
    countProducts:0,
    productsInCart: data
};

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {

        increment: (state: IProductsState, action: any) => {
            const local =localStorage.getItem('products')
            const data = local ? JSON.parse(local) :[]
            const item=data.find((item:any) => item.title === action.payload.title)
            if(item){
                item.count = item.count +1
                localStorage.setItem('products', JSON.stringify(data))
            }else{
                localStorage.setItem('products', JSON.stringify([...data, {...action.payload,count:1}]))
            }

            state.countProducts ++;
        },
    },
});

export const {increment} = products.actions;
export default products.reducer;
