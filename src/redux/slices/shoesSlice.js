import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShoesService from "../../services/ShoesService";

const initialState = {
  shoes: [],
  status: "idle",
};

const { getAllShoes } = ShoesService();

export const fetchShoes = createAsyncThunk(
  "shoes/fetchShoes",
  async (gender) => {
    return await getAllShoes(gender);
  }
);

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchShoes.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.shoes = action.payload;
      })
      .addCase(fetchShoes.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const shoesSelector = (state) => state.shoesReducer;

export const { reducer: shoesReducer } = shoesSlice;
