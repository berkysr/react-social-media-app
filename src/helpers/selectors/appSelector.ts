import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@base/store';

export const selectApp = createSelector(
  (state: RootState) => state.app,
  (app) => app,
);

export const selectIsLoggedIn = createSelector(
  (state: RootState) => state.app,
  (app) => app.isLoggedIn,
);

export const selecLastVisitedURL = createSelector(
  (state: RootState) => state.app,
  (app) => app.lastVisitedURL,
);

export const selectLanguage = createSelector(
  (state: RootState) => state.app,
  (app) => app.selectedLanguage,
);

export const selectIsMobileNavbarActive = createSelector(
  (state: RootState) => state.app,
  (app) => app.isMobileNavbarActive,
);
