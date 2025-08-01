import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../../features/counter/counterSlice';
import { eventSlice } from '../../features/events/eventSlice';
import { accountSlice } from '../../features/account/accountSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    event: eventSlice.reducer,
    account: accountSlice.reducer, // Assuming you have an account slice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()