import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectAPIRequest = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest,
);

export const selectIsLoading = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.isLoading,
);

export const selectAlerts = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.alerts,
);

export const selectCloseFriends = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.closeFriends,
);
