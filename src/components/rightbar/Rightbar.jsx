import "./rightbar.css";
import OnlineFriend from "../onlineFriend/OnlineFriend";
import UserInfo from "./userInfo/UserInfo";
import Following from './following/Following';
import { UsersProfileDetails, Users, Companies } from "../../dummyData";

export default function Rightbar({ profile }) {
  const currentUser = Users.filter((user) => user.currentUser)[0];
  const { id, following } = currentUser;
  const currentProfileDetails = UsersProfileDetails.filter(
    (userProfileDetail) => userProfileDetail.id === id
  )[0];
  const followedCompanies = Companies.filter(company => following.includes(company.id));

  const HomePageRightBar = () => {
    return (
      <>
        <div className="birthDayContainer">
          <img className="birthDayImg" src="/assets/gift.png" alt="" />
          <span className="birthDayText">
            <b>Anthony Davis</b> and <b>3 others</b> celebrating their birthday
            today!
          </span>
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((eachUser) => {
            return eachUser.online ? (
              <OnlineFriend key={eachUser.id} user={eachUser} />
            ) : null;
          })}
        </ul>
      </>
    );
  };

  const ProfilePageRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          {Object.keys(currentProfileDetails).map((info) => (
            <UserInfo
              key={info}
              keyValue={info}
              info={currentProfileDetails[info]}
            />
          ))}
        </div>
        <h4 className="rightBarTitle">User Followings</h4>
        <div className="rightBarFollowingContainer">
          {followedCompanies.map(company => {
            return <Following key={company.id} company={company}></Following>
          })}
          </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
      </div>
    </div>
  );
}
