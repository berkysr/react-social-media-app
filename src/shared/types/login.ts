export interface LoginResponse {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface DecodedGoogleCredentialResponse {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number | null;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number | null;
  exp: number | null;
  jti: string;
}
