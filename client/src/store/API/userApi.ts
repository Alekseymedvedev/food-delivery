import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOrder} from "../../types/types";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}`,
    }),
    endpoints: (build) => ({

        authUser: build.mutation({
            query: (body) => ({
                url: `auth`,
                method: 'Post',
                body
            }),
        }),
        updateUser: build.mutation({
            query: ({userId, body}) => ({
                url: `/user/${userId}`,
                method: 'PATCH',
                body
            }),
        }),
        deleteUser: build.mutation({
            query(id) {
                return {
                    url: `${id}`,
                    method: 'DELETE',
                }
            },
        }),

    }),
});

export const {useAuthUserMutation, useDeleteUserMutation,  useUpdateUserMutation} = userApi;
