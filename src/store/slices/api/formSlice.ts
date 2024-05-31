import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USERS_URL } from "../../../api/url";


export const formSlice = createApi({
    reducerPath: 'formSlice',
    baseQuery: fetchBaseQuery({baseUrl: USERS_URL }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: '',
                method: 'GET'
            }),
            providesTags: ["users"],
            // transformResponse: (res) => res.data
        }),
        addUser: builder.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["users"]
        })
    })
})

export const { useGetAllUsersQuery, useAddUserMutation } = formSlice;