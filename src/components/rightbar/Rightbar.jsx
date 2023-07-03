import "./rightbar.css";
import styles from "../../index.css";
import OnlineFriend from "../onlineFriend/OnlineFriend";
import UserInfo from "./userInfo/UserInfo";
import Following from "./following/Following";
import { UsersProfileDetails, Users, Companies } from "../../dummyData";

export default function Rightbar({ profile }) {
  const currentUser = Users.filter((user) => user.currentUser)[0];
  const { id, following } = currentUser;
  const currentProfileDetails = UsersProfileDetails.filter(
    (userProfileDetail) => userProfileDetail.id === id
  )[0];
  const followedCompanies = Companies.filter((company) =>
    following.includes(company.id)
  );

  const HomePageRightBar = () => {
    return (
      <>
        <div className="birthDayContainer flex items-center">
          <img
            className="birthDayImg w-10 h-10 mr-2.5"
            src="/assets/gift.png"
            alt=""
          />
          <span className="birthDayText font-light text-base my-8 mx-0">
            <b>Anthony Davis</b> and <b>3 others</b> celebrating their birthday
            today!
          </span>
        </div>
        <img className="rightBarAd w-full rounded-xl" src="/assets/ad.png" alt="" />
        <h4 className="rightBarTitle text-lg font-medium mb-5">Online Friends</h4>
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
        <h4 className="rightBarTitle text-lg font-medium mb-5">User Information</h4>
        <div className="rightBarInfo mb-8">
          {Object.keys(currentProfileDetails).map((info) => (
            <UserInfo
              key={info}
              keyValue={info}
              info={currentProfileDetails[info]}
            />
          ))}
        </div>
        <h4 className="rightBarTitle text-lg	font-medium mb-5">User Followings</h4>
        <div className="rightBarFollowingContainer mb-5 grid grid-rows-[8rem] grid-cols-[8rem_8rem_8rem] gap-6">
          {followedCompanies.map((company) => {
            return <Following key={company.id} company={company}></Following>;
          })}
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
      </>
    );
  };

  return (
    <div className="rightBar flex-[3.5] top-[3.5rem]">
      <div className="rightBarWrapper pt-5 pr-5 pb-0 pl-0">
        {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
      </div>
    </div>
  );
}
