import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}products`,
    }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: '',
            }),
        }),
           getOneProduct: build.query({
            query: (id) => ({
                url: `${id}`,
            }),
        }),
        createNewProduct: build.mutation({
            query: (body) => ({
                url: ``,
                method: 'Post',
                body
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: build.mutation({
            query: ({id, body}) => ({
                url: `${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation({
            query(id) {
                return {
                    url: `${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Products']
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetOneProductQuery,
    useCreateNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
