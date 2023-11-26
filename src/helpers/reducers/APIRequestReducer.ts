import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login';
import { AppDispatch, RootState } from '../../store';
import { APIMethods, Common } from '../enums/enums';
import { sessionStorageUtil } from '../utils/storageFunctions';
import { GenerateUser, GenerateUserAPIResponse, RandomPost, RandomUser, RandomUserFilter } from '../types/api';
import { APIRequestState } from '../types/state';

const initialState: APIRequestState = {
  authenticationAPIDetails: {
    id: null,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
  },
  currentUser: [],
  googleLoginDetails: {
    iss: '',
    azp: '',
    aud: '',
    sub: '',
    email: '',
    email_verified: false,
    nbf: null,
    name: '',
    picture: '',
    given_name: '',
    family_name: '',
    locale: '',
    iat: null,
    exp: null,
    jti: '',
  },
  closeFriends: [],
  onlineFriends: [],
  friendRequests: [],
  posts: [],
  alerts: [],
  isLoading: false,
  selectedUser: {},
};

export const getAuthenticationAPIDetails = createAsyncThunk<
  LoginResponse,
  {
    username: string;
    password: string;
  },
  { state: RootState; dispatch: AppDispatch }
>('APICall/getAuthenticationAPIDetails', async ({ username, password }, { dispatch, rejectWithValue }) => {
  const authenticationAPIResponse: LoginResponse = await fetch(process.env.REACT_APP_AUTHENTICATION_URL as string, {
    method: APIMethods.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((data) => data.json());

  return authenticationAPIResponse;
});

export const generateRandomUsers = createAsyncThunk<
  GenerateUserAPIResponse,
  {
    filterOptions: GenerateUser;
  },
  { state: RootState; dispatch: AppDispatch }
>('APICall/generateRandomUser', async ({ filterOptions }, { dispatch, rejectWithValue }) => {
  let filtersAsString = '?inc=';
  filterOptions.filter.forEach((filter: RandomUserFilter, index: number) => {
    filtersAsString += index === 0 ? filter : ',' + filter;
  });

  filterOptions.results && (filtersAsString += `&results=${filterOptions.results}`);

  const randomUserEndpoint = process.env.REACT_APP_RANDOM_USER_URL + filtersAsString;
  const authenticationAPIResponse: GenerateUserAPIResponse = await fetch(randomUserEndpoint).then((data) => data.json());

  return authenticationAPIResponse;
});

export const generateRandomPosts = createAsyncThunk<
  GenerateUserAPIResponse,
  {
    page?: string;
    limit?: string;
  },
  { state: RootState; dispatch: AppDispatch }
>('APICall/generateRandomPosts', async ({ page = 0, limit = 20 }, { dispatch, rejectWithValue }) => {
  const postEndPoint = `${process.env.REACT_APP_RANDOM_POSTS_URL}?page=${page}&limit=${limit}`;
  const authenticationAPIResponse: GenerateUserAPIResponse = await fetch(postEndPoint, {
    headers: {
      'Content-Type': 'application/json',
      'app-id': process.env.REACT_APP_DUMMY_API_KEY as string,
    },
  }).then((data) => data.json());

  return authenticationAPIResponse;
});

export const proposalSlice = createSlice({
  name: 'APIRequestState',
  initialState,
  reducers: {
    setAuthenticationAPIDetails: (state, action: PayloadAction<APIRequestState['authenticationAPIDetails']>) => {
      state.authenticationAPIDetails = action.payload;
    },
    setGoogleAPIDetails: (state, action: PayloadAction<APIRequestState['googleLoginDetails']>) => {
      state.googleLoginDetails = action.payload;
    },
    setAlertMessage: (state, action) => {
      action.payload.identifier = state.alerts.length === 0 ? 1 : state.alerts.length + 1;
      state.alerts = [...state.alerts, action.payload];
    },
    setAlertMessageAsRemoved: (state, action: PayloadAction<number>) => {
      state.alerts = state.alerts.filter((alert) => alert.identifier !== action.payload);
    },
    setIsLoading: (state, action: PayloadAction<APIRequestState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setRandomCloseFriends: (state, action: PayloadAction<GenerateUserAPIResponse>) => {
      state.closeFriends = action.payload.results;
    },
    setRandomOnlineFriends: (state, action: PayloadAction<GenerateUserAPIResponse>) => {
      state.onlineFriends = action.payload.results;
    },
    setRandomPosts: (state, action: PayloadAction<RandomPost[]>) => {
      state.posts = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<RandomUser>) => {
      state.selectedUser = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<GenerateUserAPIResponse>) => {
      state.currentUser = action.payload.results;
    },
    setFriendRequests: (state, action: PayloadAction<GenerateUserAPIResponse>) => {
      state.friendRequests = action.payload.results;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(generateRandomUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateRandomUsers.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(generateRandomUsers.rejected, (state, error) => {
        state.isLoading = false;
      });

    builder
      .addCase(getAuthenticationAPIDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuthenticationAPIDetails.fulfilled, (state, action) => {
        sessionStorageUtil.set(Common.TOKEN, action.payload.token);

        state.isLoading = false;
      })
      .addCase(getAuthenticationAPIDetails.rejected, (state, error) => {
        state.isLoading = false;
      });
  },
});

export const {
  setSelectedUser,
  setAuthenticationAPIDetails,
  setGoogleAPIDetails,
  setAlertMessageAsRemoved,
  setAlertMessage,
  setIsLoading,
  setRandomCloseFriends,
  setRandomOnlineFriends,
  setRandomPosts,
  setCurrentUser,
  setFriendRequests,
} = proposalSlice.actions;

export default proposalSlice.reducer;
