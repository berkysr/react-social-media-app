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

export const selectOnlineFriends = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.onlineFriends,
);

export const selectFriendRequests = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.friendRequests,
);

export const selectRandomPosts = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.posts,
);

export const selectSelectedUser = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.selectedUser,
);

export const selectGoogleImage = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.googleLoginDetails.picture,
);

export const selectGoogleInfo = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.googleLoginDetails,
);

export const selectCurrentUser = createSelector(
  (state: RootState) => state.APICalls,
  (APIRequest) => APIRequest.currentUser[0],
);
