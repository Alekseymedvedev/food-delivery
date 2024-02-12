import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}orders`,
    }),
    tagTypes: ['Orders'],
    endpoints: (build) => ({
        getOrders: build.query({
            query: () => ({
                url: '',
            }),
        }),
        getOneOrder: build.query({
            query: (id) => ({
                url: `${id}`,
            }),
        }),
        createNewOrder: build.mutation({
            query: (body) => ({
                url: ``,
                method: 'Post',
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
    useGetOneOrderQuery,
    useCreateNewOrderMutation,
    useDeleteOrderMutation,
} = ordersApi;
