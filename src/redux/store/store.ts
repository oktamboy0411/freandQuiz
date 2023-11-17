import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from "../reducers/userReducer";
import loaderSlice from '../reducers/loaderReducer';
import quizesSlice from '../reducers/quizesReducer';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loader: loaderSlice.reducer,
    quizes: quizesSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch