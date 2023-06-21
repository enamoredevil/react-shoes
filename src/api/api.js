import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: () => ({}),
});
