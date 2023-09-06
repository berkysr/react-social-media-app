import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

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
