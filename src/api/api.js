import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_URL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: () => ({}),
});
