import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectIsLoggedIn = createSelector(
  (state: RootState) => state.app,
  (app) => app.isLoggedIn,
);
