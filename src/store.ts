import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import APIRequestReducer from '@helpers/reducers/APIRequestReducer';
import appReducer from '@helpers/reducers/appReducer';

declare global {
  interface Window {
    store: any;
    Cypress: any;
  }
}

export const store = configureStore({
  reducer: {
    app: appReducer,
    APICalls: APIRequestReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

if (window.Cypress) {
  window.store = store;
}
