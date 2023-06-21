import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "All",
  activeSorter: "",
  searchString: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setActiveSorter: (state, action) => {
      state.activeSorter = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    clearFilters: (state) => {
      state.activeFilter = "All";
      state.activeSorter = "";
      state.searchString = "";
    },
  },
});

export const filtersSelector = (state) => state.filtersReducer;

export const { reducer: filtersReducer, actions: filtersActions } =
  filtersSlice;
