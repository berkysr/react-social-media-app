import React from 'react';
import OnlineFriend from './OnlineFriend';
import UserInfo, { ProfileDetailRawDataUnionType } from './UserInfo';
import Following from './Following';
import { users } from '../helper/api/users';
import { usersProfileDetails } from '../helper/api/profileDetails';
import { companies } from '../helper/api/companies';
import { useTranslation } from 'react-i18next';

interface RightbarProps {
  profile?: boolean;
}

export default function Rightbar({ profile }: RightbarProps) {
  const { t } = useTranslation();
  const currentUser = users.filter((user) => user.currentUser)[0];
  const { id, following } = currentUser;
  const currentProfileDetail = usersProfileDetails.filter((userProfileDetail) => userProfileDetail.id === id)[0];
  const followedCompanies = companies.filter((company) => following?.includes(company.id));

  const HomePageRightBar = () => {
    return (
      <>
        <div className="birthDayContainer flex items-center">
          <img
            loading="lazy"
            className="birthDayImg w-10 h-10 mr-2.5"
            src="/assets/gift.png"
            alt=""
          />
          <span className="birthDayText font-light text-base my-8 mx-0">
            <b>Anthony Davis</b> {t('components.rightbar.and')} <b>3 {t('components.rightbar.others')}</b>{' '}
            {t('components.rightbar.birthdayMessage')}
          </span>
        </div>
        <img
          loading="lazy"
          className="rightBarAd w-full rounded-xl"
          src="/assets/ad.png"
          alt=""
        />
        <h4 className="rightBarTitle text-lg font-medium mb-5">{t('components.rightbar.onlineFriends')}</h4>
        <ul className="rightBarFriendList">
          {users.map((eachUser) => {
            return eachUser.online ? (
              <OnlineFriend
                key={eachUser.id}
                user={eachUser}
              />
            ) : null;
          })}
        </ul>
      </>
    );
  };

  const ProfilePageRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle text-lg font-medium mb-5">{t('components.rightbar.userInformation')}</h4>
        <div className="rightBarInfo mb-8">
          {(Object.keys(currentProfileDetail) as ProfileDetailRawDataUnionType[]).map((profileDetailKey) => (
            <UserInfo
              key={profileDetailKey}
              currentProfileKey={profileDetailKey}
              currentProfileValue={currentProfileDetail[profileDetailKey]}
            />
          ))}
        </div>
        <h4 className="rightBarTitle text-lg	font-medium mb-5">{t('components.rightbar.userFollowings')}</h4>
        <div className="rightBarFollowingContainer mb-5 grid grid-rows-[8rem] grid-cols-[8rem_8rem_8rem] gap-6">
          {followedCompanies.map((company) => {
            return (
              <Following
                key={company.id}
                company={company}
              ></Following>
            );
          })}
        </div>
        <img
          loading="lazy"
          className="rightBarAd"
          src="/assets/ad.png"
          alt=""
        />
      </>
    );
  };

  return (
    <div className="rightBar flex-[3.5] top-[3.5rem]">
      <div className="rightBarWrapper pt-5 pr-5 pb-0 pl-0">{profile ? <ProfilePageRightBar /> : <HomePageRightBar />}</div>
    </div>
  );
}
