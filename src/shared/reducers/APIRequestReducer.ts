import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DecodedGoogleCredentialResponse, LoginResponse } from '../types/login';
import { AlertElement } from '../types/general';
import { AppDispatch, RootState } from '../../store';
import { APIEndpoints, APIMethods, Common } from '../enums/enums';
import { t } from 'i18next';
import { sessionStorageUtil } from '../../helper/utils/storageFunctions';

export interface APIRequestState {
  authenticationAPIDetails: LoginResponse;
  googleLoginDetails: DecodedGoogleCredentialResponse;
  alerts: AlertElement[];
  isLoading: boolean;
}

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
  alerts: [],
  isLoading: false,
};

export const getAuthenticationAPIDetails = createAsyncThunk<
  LoginResponse,
  {
    username: string;
    password: string;
  },
  { state: RootState; dispatch: AppDispatch }
>('APICall/getAuthenticationAPIDetails', async ({ username, password }, { dispatch, rejectWithValue }) => {
  const authenticationAPIResponse: LoginResponse = await fetch(APIEndpoints.AUTHENTICATION_URL, {
    method: APIMethods.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
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
  },
  extraReducers(builder) {
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

export const { setAuthenticationAPIDetails, setGoogleAPIDetails, setAlertMessageAsRemoved, setAlertMessage, setIsLoading } =
  proposalSlice.actions;

export default proposalSlice.reducer;
