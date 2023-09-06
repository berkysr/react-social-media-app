import { Box, Icon } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { Alert } from '../shared/types/general';
import { useAppDispatch } from '../store';
import { setAlertMessageAsRemoved } from '../shared/reducers/APIRequestReducer';

interface AlertComponentProps {
  icon: 'danger' | 'success' | 'warning';
  message: string;
  canBeClosed?: boolean;
  identifier: number;
}

export default function AlertComponent({ identifier, icon, message, canBeClosed = true }: AlertComponentProps) {
  const dispatch = useAppDispatch();

  const icons = {
    danger: {
      svg: (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      ),
      color: 'red',
    },
    success: {
      svg: (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="green"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      ),
      color: 'green',
    },
    warning: {
      svg: (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
      ),
      color: 'orange',
    },
  };
  const closeButton = (
    <svg
      className="w-3 h-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );

  return (
    <>
      <Box
        id={`toast-${icon}${identifier}`}
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3"
      >
        <Box
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${icons[icon].color}-500 bg-${icons[icon].color}-100 rounded-lg dark:bg-${icons[icon].color}-800 dark:text-${icons[icon].color}-200`}
          title={t('components.alert.title.icon')}
        >
          {icons[icon].svg}
        </Box>

        <Box className="text-sm font-normal">{message}</Box>

        {canBeClosed ? (
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
            title={t('components.alert.title.close')}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              event.preventDefault();

              dispatch(setAlertMessageAsRemoved(identifier));
            }}
          >
            {closeButton}
          </button>
        ) : null}
      </Box>
    </>
  );
}
