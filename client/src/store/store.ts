import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./API/productsApi";
import {categoriesApi} from "./API/categoriesApi";

const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
})

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            productsApi.middleware,
            categoriesApi.middleware,
        ),
    });

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

