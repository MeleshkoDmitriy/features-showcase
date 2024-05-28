import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../../../utils/url";


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['items'],
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: () => ({
                url: '/deutschland',
                method: 'GET'
            }),
            providesTags: ["items"],
            // transformResponse: (res) => res.data
        }),
        addItem: builder.mutation({
            query: (body) => ({
                url: '/items',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["items"]
        })
    })
})

export const { useGetAllItemsQuery, useAddItemMutation } = apiSlice;