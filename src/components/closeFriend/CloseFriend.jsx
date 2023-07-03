import "./closefriend.css";
import styles from "../../index.css";

export default function CloseFriend({ user }) {
  const { profilePicture, userName } = user;
  return (
    <li className="sideBarFriend flex items-center mb-4 cursor-pointer">
      <img
        src={profilePicture}
        alt=""
        className="sideBarFriendImg 
        w-9 h-9 rounded-full object-cover mr-2.5"
      />
      <span className="sideBarFriendName">{userName}</span>
    </li>
  );
}
