import "./onlinefriend.css";

export default function OnlineFriend({ user }) {
  const { profilePicture, userName } = user;

  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src= { profilePicture }
          alt=""
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{ userName }</span>
    </li>
  );
}
