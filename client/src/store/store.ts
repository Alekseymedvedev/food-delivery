import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./API/productsApi";
import {categoriesApi} from "./API/categoriesApi";
import productReducer from "./slice/productsSlice"
import {ordersApi} from "./API/ordersApi";
import {searchApi} from "./API/searchApi";

const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    productReducer
})

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            productsApi.middleware,
            categoriesApi.middleware,
            ordersApi.middleware,
            searchApi.middleware,
        ),
    });

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

