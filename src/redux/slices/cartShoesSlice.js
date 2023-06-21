import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShoesService from "../../services/ShoesService";

const initialState = {
  cartShoes: [],
  status: "idle",
  totalPrice: 0,
};

const { getCartShoes, toggleCartShoe } = ShoesService();

export const fetchCartShoes = createAsyncThunk(
  "cartShoes/fetchCartShoes",
  async () => {
    return await getCartShoes();
  }
);

export const removeCartShoe = createAsyncThunk(
  "cartShoes/removeCartShoe",
  async ({ id }, { dispatch }) => {
    dispatch(cartShoesActions.removeCartShoeLocally(id));
    toggleCartShoe(id, "false");
  }
);

const cartShoesSlice = createSlice({
  name: "cartShoes",
  initialState,
  reducers: {
    removeCartShoeLocally: (state, action) => {
      state.cartShoes = state.cartShoes.filter(
        (item) => item.id !== action.payload
      );
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.cartShoes.reduce(
        (sum, item) => (sum += parseFloat(item.price)),
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartShoes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCartShoes.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.cartShoes = action.payload;
      })
      .addCase(fetchCartShoes.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const cartShoesSelector = (state) => state.cartShoesReducer;

export const { reducer: cartShoesReducer, actions: cartShoesActions } =
  cartShoesSlice;
