import { createSlice } from "@reduxjs/toolkit";


const initialState={
   movies:[]
};


const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{ setMovies: (state, action) => {
        state.movies = action.payload;
        
      },
      setMovie: (state, action) => {
        state.movies = action.payload.movie;
        
      },
    
    }
  }

);
export const{setMovies,setMovie}=movieSlice.actions;

export default movieSlice.reducer;

