import { User } from '@helpers/types/user';

export const users: User[] = [
  {
    id: 1,
    profilePicture: 'assets/person/1.jpeg',
    userName: 'Berk Yaşar',
    online: true,
    closeFriend: false,
    currentUser: true,
    following: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: 2,
    profilePicture: 'assets/person/2.jpeg',
    userName: 'Janell Shrum',
    online: false,
    closeFriend: true,
    currentUser: false,
    following: [1, 2, 3, 4, 5, 11],
  },
  {
    id: 3,
    profilePicture: 'assets/person/3.jpeg',
    userName: 'Alex Durden',
    online: true,
    closeFriend: true,
  },
  {
    id: 4,
    profilePicture: 'assets/person/4.jpeg',
    userName: 'Dora Hawks',
    online: true,
    closeFriend: true,
  },
  {
    id: 5,
    profilePicture: 'assets/person/5.jpeg',
    userName: 'Thomas Holden',
    online: true,
    closeFriend: true,
  },
  {
    id: 6,
    profilePicture: 'assets/person/6.jpeg',
    userName: 'Shirley Beauchamp',
    online: false,
    closeFriend: true,
  },
  {
    id: 7,
    profilePicture: 'assets/person/7.jpeg',
    userName: 'Travis Bennett',
    online: false,
    closeFriend: true,
  },
  {
    id: 8,
    profilePicture: 'assets/person/8.jpeg',
    userName: 'Kristen Thomas',
    online: true,
    closeFriend: true,
  },
  {
    id: 9,
    profilePicture: 'assets/person/9.jpeg',
    userName: 'Gary Duty',
    online: true,
    closeFriend: true,
  },
  {
    id: 10,
    profilePicture: 'assets/person/lebron-james.jpg',
    userName: 'Lebron James',
    online: false,
    closeFriend: true,
  },
];
