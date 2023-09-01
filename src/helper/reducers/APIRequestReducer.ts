import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DecodedGoogleCredentialResponse, LoginResponse } from '../types/login';
import { AppDispatch, RootState } from '../../store';
import { APIEndpoints, APIMethods } from '../enums/enums';

export interface APIRequestState {
  authenticationAPIDetails: LoginResponse;
  googleLoginDetails: DecodedGoogleCredentialResponse;
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
};

export const getAuthenticationAPIDetails = createAsyncThunk<
  LoginResponse,
  {
    username: string;
    password: string;
  },
  { state: RootState; dispatch: AppDispatch }
>('APICall/getAuthenticationAPIDetails', async ({ username, password }, { dispatch, rejectWithValue }) => {
  let authenticationAPIResponse: LoginResponse;

  try {
    authenticationAPIResponse = await fetch(APIEndpoints.AUTHENTICATION_URL, {
      method: APIMethods.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((data) => data.json());
  } catch (e) {
    return rejectWithValue(e);
  }

  dispatch(setAuthenticationAPIDetails(authenticationAPIResponse));

  return authenticationAPIResponse;
});

export const proposalSlice = createSlice({
  name: 'APIRequestState',
  initialState,
  reducers: {
    setAuthenticationAPIDetails: (state, action: PayloadAction<LoginResponse>) => {
      state.authenticationAPIDetails = action.payload;
    },
    setGoogleAPIDetails: (state, action: PayloadAction<DecodedGoogleCredentialResponse>) => {
      state.googleLoginDetails = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthenticationAPIDetails.pending, (state) => {
        console.log('mockAuthenticationAPIResponse pending', state);
      })
      .addCase(getAuthenticationAPIDetails.fulfilled, (state, action) => {
        console.log('mockAuthenticationAPIResponse fulfilled', state);
      })
      .addCase(getAuthenticationAPIDetails.rejected, (state, err) => {
        console.log('mockAuthenticationAPIResponse rejected', state);
      });
  },
});

export const { setAuthenticationAPIDetails, setGoogleAPIDetails } = proposalSlice.actions;

export default proposalSlice.reducer;
