import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { UsersProfileDetails, Users } from "../../dummyData";
import styles from "../../index.css";

export default function Profile() {
  const currentUserData = Users.filter((user) => user.currentUser)[0];
  const { userName, online, profilePicture, currentUser, id } = currentUserData;
  const currentProfileDetails = UsersProfileDetails.filter(
    (userProfileDetail) => userProfileDetail.id === id
  );
  const { profileDescription } = currentProfileDetails[0];

  return (
    <>
      <Topbar />
      <div className="profile flex">
        <Sidebar />
        <div className="profileRight flex-9">
          <div className="profileRightTop">
            <div className="profileCover relative h-32vh">
              <img
                loading="lazy"
                className="profileCoverImg w-full object-cover h-4/5"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                loading="lazy"
                className="profileUserImg 
                object-cover left-0 right-0 rounded-full absolute m-auto
                top-1/2	cursor-pointer w-36 h-36 border-4 white"
                src={profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo flex flex-col items-center justify-center">
              <h4 className="profileInfoName text-2xl">{userName}</h4>
              <span className="profileInfoDesc font-light	">
                {profileDescription}{" "}
              </span>
            </div>
          </div>
          <div className="profileRightBottom flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
