import "./closefriend.css";

export default function CloseFriend({ user }) {
    const { profilePicture, userName } = user;
  return (
    <li className="sideBarFriend">
      <img src={ profilePicture } alt="" className="sideBarFriendImg" />
      <span className="sideBarFriendName">{ userName }</span>
    </li>
  );
}
