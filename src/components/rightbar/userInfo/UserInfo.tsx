import React from "react";

interface UserInfoProps {
  currentProfileKey: ProfileDetailRawDataUnionType,
  currentProfileValue?: string | number,
}

export enum ProfileDetailRawData {
  CITY = "city",
  FROM = "from",
  RELTIONSHIP = "relationship",
  BIRTHDAY = "birthday",
  JOB = "job",
  SCHOOL = "school",
};

export type ProfileDetailRawDataUnionType = `${ProfileDetailRawData}`;

export default function UserInfo({ currentProfileKey, currentProfileValue }: UserInfoProps) {
  const camelCaseKey = `${currentProfileKey[0].toUpperCase()}${currentProfileKey.substring(1, currentProfileKey.length)}`;

  return (
    <>
      {currentProfileKey && currentProfileValue ? (
        <div className="rightBarInfoItem mb-2.5">
          <span className="rightBarInfoKey mr-4 font-medium	text-[#555]">{camelCaseKey}</span>
          <span className="rightBarInfoValue font-light">{currentProfileValue}</span>
        </div>
      ) : null}
    </>
  );
}
