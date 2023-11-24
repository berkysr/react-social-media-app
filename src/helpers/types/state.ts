import { Languages } from '../enums/enums';
import { RandomPost, RandomUser } from './api';
import { AlertElement } from './general';
import { DecodedGoogleCredentialResponse, LoginResponse } from './login';
import { User } from './user';

export interface AppState {
  lastVisitedURL: string;
  user: User | null;
  isLoggedIn: boolean;
  selectedLanguage: Languages.EN | Languages.TR;
}

export interface APIRequestState {
  authenticationAPIDetails: LoginResponse;
  googleLoginDetails: DecodedGoogleCredentialResponse;
  currentUser: RandomUser[];
  closeFriends: RandomUser[];
  onlineFriends: RandomUser[];
  friendRequests: RandomUser[];
  selectedUser: RandomUser;
  posts: RandomPost[];
  alerts: AlertElement[];
  isLoading: boolean;
}
