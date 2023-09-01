import { createSelector, createSlice, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../types/user';
import { PageURLs } from '../enums/enums';
import { useNavigate } from 'react-router-dom';

export interface AppState {
  lastVisitedURL: string;
  pageError: {
    code?: number;
    message?: string;
  } | null;
  pageLoading: boolean;
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AppState = {
  lastVisitedURL: PageURLs.HOME,
  pageError: null,
  pageLoading: false,
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
    setPageError: (state, action: PayloadAction<AppState['pageError']>) => {
      state.pageError = action.payload;
    },
    setPageLoading: (state, action: PayloadAction<AppState['pageLoading']>) => {
      state.pageLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<AppState['user']>) => {
      state.user = action.payload;
    },
    setIsUserLoggedIn: (state, action: PayloadAction<AppState['isLoggedIn']>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(isRejected(), (state, action) => {
      state.pageError = {
        message: action.error.message,
      };
    });
  },
});

export const { setLastVisitedURL, setPageError, setPageLoading, setUser, setIsUserLoggedIn } = appSlice.actions;

export default appSlice.reducer;
