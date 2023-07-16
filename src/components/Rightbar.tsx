import React from 'react';
import OnlineFriend from './OnlineFriend';
import UserInfo, { ProfileDetailRawDataUnionType } from './UserInfo';
import Following from './Following';
import { users } from '../helper/api/users';
import { usersProfileDetails } from '../helper/api/profileDetails';
import { companies } from '../helper/api/companies';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

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
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Box
          display="flex"
          flexDirection="row"
          className="w-full"
        >
          <img
            loading="lazy"
            className="flex-none w-12 mr-3"
            src="/assets/gift.png"
            alt=""
          />

          <span className="flex-1 font-light text-base">
            <b>Anthony Davis</b> {t('components.rightbar.and')} <b>3 {t('components.rightbar.others')}</b>
            {` ${t('components.rightbar.birthdayMessage')}`}
          </span>
        </Box>

        <img
          loading="lazy"
          className="w-full rounded-xl"
          src="/assets/ad.png"
          alt=""
        />

        <Box
          display="flex"
          flexDirection="column"
          className="w-full"
        >
          <h4 className="text-lg font-medium mb-5">{t('components.rightbar.onlineFriends')}</h4>

          <ul>
            {users.map((eachUser) => {
              return eachUser.online ? (
                <OnlineFriend
                  key={eachUser.id}
                  user={eachUser}
                />
              ) : null;
            })}
          </ul>
        </Box>
      </Box>
    );
  };

  const ProfilePageRightBar = () => {
    return (
      <>
        <h4 className="text-lg font-medium mb-5">{t('components.rightbar.userInformation')}</h4>

        <div className="mb-8">
          {(Object.keys(currentProfileDetail) as ProfileDetailRawDataUnionType[]).map((profileDetailKey) => (
            <UserInfo
              key={profileDetailKey}
              currentProfileKey={profileDetailKey}
              currentProfileValue={currentProfileDetail[profileDetailKey]}
            />
          ))}
        </div>

        <h4 className="text-lg	font-medium mb-5">{t('components.rightbar.userFollowings')}</h4>

        <div className="mb-5 grid grid-rows-[8rem] grid-cols-[8rem_8rem_8rem] gap-6">
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
          src="/assets/ad.png"
          alt=""
        />
      </>
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full sticky overflow-y-scroll"
    >
      {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
    </Box>
  );
}
