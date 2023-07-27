import React from 'react';
import UserInfo, { ProfileDetailRawDataUnionType } from './UserInfo';
import Following from './Following';
import { users } from '../helper/api/users';
import { usersProfileDetails } from '../helper/api/profileDetails';
import { companies } from '../helper/api/companies';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

export default function ProfilePageRightBar() {
  const { t } = useTranslation();
  const currentUser = users.filter((user) => user.currentUser)[0];
  const { id, following } = currentUser;
  const currentProfileDetail = usersProfileDetails.filter((userProfileDetail) => userProfileDetail.id === id)[0];
  const followedCompanies = companies.filter((company) => following?.includes(company.id));

  const profileDetails = Object.keys(currentProfileDetail) as ProfileDetailRawDataUnionType[];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        className="w-full"
      >
        <h2 className="text-lg font-medium mb-5">{t('components.rightbar.userInformation')}</h2>

        <Box mb={3}>
          {profileDetails.map((profileDetailKey, index) => (
            <UserInfo
              key={profileDetailKey}
              currentProfileKey={profileDetailKey}
              currentProfileValue={currentProfileDetail[profileDetailKey]}
              profileDetail={profileDetails}
              profiledetailIndex={index}
            />
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        className="w-full"
        mb={5}
      >
        <h2 className="text-lg	font-medium">{t('components.rightbar.userFollowings')}</h2>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={3}
          mb={3}
        >
          {followedCompanies.map((company) => {
            return (
              <Following
                key={company.id}
                company={company}
              ></Following>
            );
          })}
        </Box>

        <img
          loading="lazy"
          src="/assets/ad.png"
          alt=""
        />
      </Box>
    </Box>
  );
}
