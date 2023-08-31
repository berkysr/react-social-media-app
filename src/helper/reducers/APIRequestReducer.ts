import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DecodedGoogleCredentialResponse, LoginResponse } from '../types/login';
import { AppDispatch, RootState } from '../../store';
import { APIEndpoints, APIMethods, APIMockCredentials, PageURLs } from '../enums/enums';

export interface APIRequestState {
  MockAuthenticationAPIDetails: LoginResponse;
  GoogleLoginDetails: DecodedGoogleCredentialResponse;
}

const initialState: APIRequestState = {
  MockAuthenticationAPIDetails: {
    id: null,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
  },
  GoogleLoginDetails: {
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
>('APICall/getAuthenticationAPIDetails', async ({ username, password }, { rejectWithValue }) => {
  let authenticationAPIResponse: LoginResponse;

  try {
    authenticationAPIResponse = await fetch(APIEndpoints.AUTHENTICATION_URL, {
      method: APIMethods.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: APIMockCredentials.MOCK_USERNAME,
        password: APIMockCredentials.MOCK_PASSWORD,
      }),
    }).then((data) => data.json());
  } catch (e) {
    return rejectWithValue(e);
  }

  console.log('authenticationAPIResponse', authenticationAPIResponse);

  return authenticationAPIResponse;
});

export const proposalSlice = createSlice({
  name: 'APIRequestState',
  initialState,
  reducers: {
    // setMockAuthenticationAPIDetails: (state, action: PayloadAction<LoginResponse>) => {
    //   state.MockAuthenticationAPIDetails = action.payload;
    // },
  },
  extraReducers(builder) {
    // builder
    //   .addCase(getAuthenticationAPIDetails.pending, (state) => {
    //     console.log('mockAuthenticationAPIResponse pending', state);
    //   })
    //   .addCase(getMockAuthenticationAPIDetails.fulfilled, (state, action) => {
    //     console.log('mockAuthenticationAPIResponse fulfilled', state);
    //   })
    //   .addCase(getMockAuthenticationAPIDetails.rejected, (state, err) => {
    //     console.log('mockAuthenticationAPIResponse rejected', state);
    //   });
  },
});

// export const { setMockAuthenticationAPIDetails } = proposalSlice.actions;

export default proposalSlice.reducer;
