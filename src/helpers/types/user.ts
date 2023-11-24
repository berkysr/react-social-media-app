export interface User {
  id: number;
  profilePicture?: string;
  userName?: string;
  online?: boolean;
  info?: string;
  closeFriend?: boolean;
  currentUser?: boolean;
  following?: number[];
}
