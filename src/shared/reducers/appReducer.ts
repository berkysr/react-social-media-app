import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { PageURLs } from '../enums/enums';

export interface AppState {
  lastVisitedURL: string;
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AppState = {
  lastVisitedURL: PageURLs.HOME,
  user: null,
  isLoggedIn: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLastVisitedURL: (state, action: PayloadAction<AppState['lastVisitedURL']>) => {
      state.lastVisitedURL = action.payload;
    },
    setUser: (state, action: PayloadAction<AppState['user']>) => {
      state.user = action.payload;
    },
    setIsUserLoggedIn: (state, action: PayloadAction<AppState['isLoggedIn']>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLastVisitedURL, setUser, setIsUserLoggedIn } = appSlice.actions;

export default appSlice.reducer;
