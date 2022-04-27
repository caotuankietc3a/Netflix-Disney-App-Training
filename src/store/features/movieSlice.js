import {createSlice} from "@reduxjs/toolkit";

const initialMovieState = {
   recommend: null,
   newDisney: null,
   original: null,
   trending: null
}

const movieSlice = createSlice({
   name: "movie",
   initialState: initialMovieState,
   reducers: {
      setMovie(state, action) {
         state.recommend = action.payload.recommend;
         state.newDisney = action.payload.newDisney;
         state.original = action.payload.original;
         state.trending = action.payload.trending;
      }
   }
});

export const movieActions = movieSlice.actions;

export default movieSlice;
