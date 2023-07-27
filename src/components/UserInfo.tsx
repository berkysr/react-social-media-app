import { Box } from '@mui/material';
import React from 'react';

interface UserInfoProps {
  currentProfileKey: ProfileDetailRawDataUnionType;
  currentProfileValue?: string | number;
  profileDetail: ProfileDetailRawDataUnionType[];
  profiledetailIndex: number;
}

export enum ProfileDetailRawData {
  CITY = 'city',
  FROM = 'from',
  RELTIONSHIP = 'relationship',
  BIRTHDAY = 'birthday',
  JOB = 'job',
  SCHOOL = 'school',
}

export type ProfileDetailRawDataUnionType = `${ProfileDetailRawData}`;

export default function UserInfo({ currentProfileKey, currentProfileValue, profileDetail, profiledetailIndex }: UserInfoProps) {
  const camelCaseKey = `${currentProfileKey[0].toUpperCase()}${currentProfileKey.substring(1, currentProfileKey.length)}`;

  return (
    <>
      {currentProfileKey && currentProfileValue ? (
        <Box
          display="flex"
          flexDirection="row"
          mb={profiledetailIndex === profileDetail.length - 1 ? 0 : 1}
        >
          <h3 className="mr-4 font-medium	text-[#555] flex-[4]">{camelCaseKey}</h3>

          <p className="font-light flex-[8]">{currentProfileValue}</p>
        </Box>
      ) : null}
    </>
  );
}
