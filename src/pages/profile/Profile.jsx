import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { UsersProfileDetails, Users } from "../../dummyData";

export default function Profile() {
  const currentUserData = Users.filter(user => user.currentUser)[0];
  const { userName, online, profilePicture, currentUser, id } = currentUserData;
  const currentProfileDetails = UsersProfileDetails.filter(userProfileDetail => userProfileDetail.id === id);
  const { profileDescription } = currentProfileDetails[0];

    return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={ profilePicture }
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{ userName }</h4>
                <span className="profileInfoDesc">{ profileDescription } </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
