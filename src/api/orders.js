import { api } from "./api";

const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Orders"],
    }),
    postOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersQuery, usePostOrderMutation } = ordersApi;
