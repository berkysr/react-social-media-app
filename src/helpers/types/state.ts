import { Languages } from '@helpers/enums/enums';
import { RandomPost, RandomUser } from '@helpers/types/api';
import { AlertElement } from '@helpers/types/general';
import { DecodedGoogleCredentialResponse, LoginResponse } from '@helpers/types/login';
import { User } from '@helpers/types/user';

export interface AppState {
  lastVisitedURL: string;
  user: User | null;
  isLoggedIn: boolean;
  selectedLanguage: Languages.EN | Languages.TR;
  isMobileNavbarActive: boolean;
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
