import React from 'react';
import { Company } from '../shared/types/company';
import { Box } from '@mui/material';
import { t } from 'i18next';

interface FollowingProps {
  company: Company;
}

export default function Following({ company }: FollowingProps) {
  const { logo, name } = company;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        className="flex-[4] cursor-pointer"
      >
        <img
          loading="lazy"
          className="object-contain max-w-[65px] max-h-[50px]"
          aria-label={`${t('a11y.followedCompany')}-${name}`}
          src={logo}
          alt={`${t('a11y.followedCompany')}-${name}`}
        />

        <figcaption className="text-center">{name}</figcaption>
      </Box>
    </>
  );
}
