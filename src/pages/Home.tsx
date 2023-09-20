import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/RightbarContainer';
import Feed from '../components/Feed';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { GenerateUser, RandomUserFilter, generateRandomUsers } from '../shared/reducers/APIRequestReducer';

export default function Home() {
  const dispatch = useAppDispatch();
  const filterOptions: GenerateUser = { filter: ['name', 'gender'] as RandomUserFilter[], results: 5 };

  useEffect(() => {
    dispatch(generateRandomUsers({ filterOptions })).then((response) => {
      const payload = response.payload;
      console.log(payload);
    });
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        className="w-full"
      >
        <Box
          display="flex"
          className="w-[30%] lg:w-[20%] relative"
        >
          <Sidebar />
        </Box>

        <Box
          display="flex"
          className="w-[40%] lg:w-[60%]"
        >
          <Feed />
        </Box>

        <Box
          display="flex"
          className="w-[30%] lg:w-[20%]"
        >
          <Rightbar profile={false} />
        </Box>
      </Box>
    </>
  );
}
