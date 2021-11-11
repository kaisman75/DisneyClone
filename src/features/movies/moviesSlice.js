import { createSlice } from "@reduxjs/toolkit";


const initialState={
   cardImgs:[]
};


const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{setMovie:(state,action)=>{
        state.cardImgs=action.payload;
    }}

});
export const{setMovies}=movieSlice.actions;
export const selctMovies=(state)=>state.movie.cardImgs;
export default movieSlice.reducer;

