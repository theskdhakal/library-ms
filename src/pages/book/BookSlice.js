import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
  },
});

// const { reducer, actions } = userSlice;

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
