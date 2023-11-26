export type RandomUserFilter =
  | 'gender'
  | 'name'
  | 'location'
  | 'email'
  | 'login'
  | 'dob'
  | 'registered'
  | 'phone'
  | 'cell'
  | 'id'
  | 'picture'
  | 'nat';

export interface GenerateUser {
  filter: RandomUserFilter[];
  results?: number;
}

export interface RandomUser {
  gender?: string;
  name?: {
    title: string;
    first: string;
    last: string;
  };
  location?: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email?: string;
  login?: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob?: {
    date: string;
    age: number;
  };
  registered?: {
    date: string;
    age: number;
  };
  phone?: string;
  cell?: string;
  id?: {
    name: string;
    value: string;
  };
  picture?: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat?: string;
}

export interface GenerateUserAPIResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface RandomPost {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export interface GeneratePostAPIResponse {
  data: RandomPost[];
  total: number;
  page: number;
  limit: number;
}
