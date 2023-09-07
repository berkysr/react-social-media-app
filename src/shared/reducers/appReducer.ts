import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { Common, PageURLs } from '../enums/enums';
import { sessionStorageUtil } from '../../helper/utils/storageFunctions';

export interface AppState {
  lastVisitedURL: string;
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AppState = {
  lastVisitedURL: PageURLs.HOME,
  user: null,
  isLoggedIn: !!sessionStorageUtil.get(Common.TOKEN),
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
