import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOrder} from "../../types/types";

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}orders`,
    }),
    tagTypes: ['Orders'],
    endpoints: (build) => ({
        getOrders: build.query<IOrder[], number | string>({
            query: () => ({
                url: '',
            }),
            providesTags: ['Orders'],
        }),
        getAllOrdersUser: build.query<IOrder[], number | string>({
            query: (id) => ({
                url: `/user/${id}`,
            }),
            providesTags: ['Orders'],
        }),
        getOneOrder: build.query<IOrder, number | string>({
            query: (id) => ({
                url: `/${id}`,
            }),
            providesTags: ['Orders'],
        }),
        createNewOrder: build.mutation({
            query: (body) => ({
                url: ``,
                method: 'Post',
                body
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrder: build.mutation({
            query: ({id, body}) => ({
                url: `${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Orders']
        }),
        deleteOrder: build.mutation({
            query(id) {
                return {
                    url: `${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Orders']
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useGetAllOrdersUserQuery,
    useGetOneOrderQuery,
    useCreateNewOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
} = ordersApi;
