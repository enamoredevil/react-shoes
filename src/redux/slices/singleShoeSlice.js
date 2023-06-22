import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShoesService from "../../services/ShoesService";

const initialState = {
  shoe: {},
  status: "idle",
  favorite: "idle",
  cart: "idle",
};

const { getSingleShoe, toggleFavoriteShoe, toggleCartShoe } = ShoesService();

export const fetchSingleShoe = createAsyncThunk(
  "singleShoe/fetchSingleShoe",
  async (id) => {
    return await getSingleShoe(id);
  }
);

export const addSingleShoeToFavorites = createAsyncThunk(
  "singleShoe/addSingleShoeToFavorites",
  async (id) => {
    return toggleFavoriteShoe(id, "true");
  }
);

export const addSingleShoeToCart = createAsyncThunk(
  "singleShoe/addSingleShoeToCart",
  async (id) => {
    return toggleCartShoe(id, "true");
  }
);

const singleShoeSlice = createSlice({
  name: "singleShoe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleShoe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSingleShoe.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.shoe = action.payload;
        state.favorite = action.payload.isFavorite;
        state.cart = action.payload.isCart;
      })
      .addCase(fetchSingleShoe.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(addSingleShoeToFavorites.pending, (state) => {
        state.favorite = "pending";
      })
      .addCase(addSingleShoeToFavorites.fulfilled, (state) => {
        state.favorite = "true";
      })
      .addCase(addSingleShoeToFavorites.rejected, (state) => {
        state.favorite = "false";
      })
      .addCase(addSingleShoeToCart.pending, (state) => {
        state.cart = "pending";
      })
      .addCase(addSingleShoeToCart.fulfilled, (state) => {
        state.cart = "true";
      })
      .addCase(addSingleShoeToCart.rejected, (state) => {
        state.cart = "false";
      });
  },
});

export const singleShoeSelector = (state) => state.singleShoeReducer;

export const { reducer: singleShoeReducer } = singleShoeSlice;
