import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./slices/filtersSlice";
import { shoesReducer } from "./slices/shoesSlice";
import { favoriteShoesReducer } from "./slices/favoriteShoesSlice";
import { cartShoesReducer } from "./slices/cartShoesSlice";
import { singleShoeReducer } from "./slices/singleShoeSlice";

import { api } from "../api/api";

export const store = configureStore({
  reducer: {
    shoesReducer,
    favoriteShoesReducer,
    cartShoesReducer,
    singleShoeReducer,
    filtersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
