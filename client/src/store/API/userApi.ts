import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token} from "./getTokenApi";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}api`,
    }),
    endpoints: (build) => ({
        authUser: build.mutation({
            query: (body) => ({
                url: `/auth`,
                method: 'Post',
                headers: {
                    "Content-Type": "application/json",
                    // "Access-Control-Allow-Origin": "*",
                },
                body
            }),
        }),
        getAllUsers: build.query({
            query: () => ({
                url: `/user`,
            }),
        }),
        getUser: build.query({
            query: (id) => ({
                url: `/user/${id}`,
            }),
        }),
        updateUser: build.mutation({
            query: ({userId, body}) => ({
                url: `/user/${userId}`,
                method: 'PATCH',
                body
            }),
        }),
        updateRoleUser: build.mutation({
            query: ({id}) => ({
                url: `/user/update/${id}`,
                headers: {Authorization: `Bearer ${token}`},
                method: 'PATCH',
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

export const {
    useAuthUserMutation,
    useGetUserQuery,
    useGetAllUsersQuery,
    useUpdateRoleUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation
} = userApi;
