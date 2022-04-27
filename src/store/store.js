import userSlice from './features/userSlice';
import movieSlice from './features/movieSlice';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
   reducer: {
      user: userSlice.reducer,
      movie: movieSlice.reducer
   }
})
