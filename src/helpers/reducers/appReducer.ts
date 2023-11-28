import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Common, Languages, PageURLs } from '@helpers/enums/enums';
import { sessionStorageUtil } from '@helpers/utils/storageFunctions';
import { AppState } from '@helpers/types/state';

const initialState: AppState = {
  lastVisitedURL: PageURLs.HOME,
  user: null,
  isLoggedIn: !!sessionStorageUtil.get(Common.TOKEN),
  selectedLanguage: Languages.EN,
  isMobileNavbarActive: false,
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
    setSelectedLanguage: (state, action: PayloadAction<AppState['selectedLanguage']>) => {
      state.selectedLanguage = action.payload;
    },
    setIsMobileNavbarActive: (state, action: PayloadAction<AppState['isMobileNavbarActive']>) => {
      state.isMobileNavbarActive = action.payload;
    },
  },
});

export const { setLastVisitedURL, setUser, setIsUserLoggedIn, setSelectedLanguage, setIsMobileNavbarActive } = appSlice.actions;

export default appSlice.reducer;
