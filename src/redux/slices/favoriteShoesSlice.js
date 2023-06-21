import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShoesService from "../../services/ShoesService";

const initialState = {
  favoriteShoes: [],
  status: "idle",
};

const { getFavoriteShoes, toggleFavoriteShoe } = ShoesService();

export const fetchFavoriteShoes = createAsyncThunk(
  "favoriteShoes/fetchFavoriteShoes",
  async () => {
    return await getFavoriteShoes();
  }
);

export const changeFavoriteShoe = createAsyncThunk(
  "favoriteShoes/changeFavoriteShoe",
  async ({ id, action }) => {
    toggleFavoriteShoe(id, action);
  }
);

export const removeFavoriteShoe = createAsyncThunk(
  "favoriteShoes/removeFavoriteShoe",
  async ({ id }, { dispatch }) => {
    dispatch(favoriteShoesActions.removeFavoriteShoeLocally(id));
    toggleFavoriteShoe(id, "false");
  }
);

const favoriteShoesSlice = createSlice({
  name: "favoriteShoes",
  initialState,
  reducers: {
    removeFavoriteShoeLocally: (state, action) => {
      state.favoriteShoes = state.favoriteShoes.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteShoes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchFavoriteShoes.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.favoriteShoes = action.payload;
      })
      .addCase(fetchFavoriteShoes.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const favoritesShoesSelector = (state) => state.favoriteShoesReducer;

export const { reducer: favoriteShoesReducer, actions: favoriteShoesActions } =
  favoriteShoesSlice;
