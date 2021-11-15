import { configureStore } from '@reduxjs/toolkit';
import movieReducer from"../features/movies/moviesSlice";
import userReducer from "../features/User/userSlice"

export const store = configureStore({
  reducer:{
  movie: movieReducer,
  user:userReducer,
}
});
