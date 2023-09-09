import { Box } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { AlertElement } from '../shared/types/general';
import { useAppDispatch } from '../store';
import { setAlertMessageAsRemoved } from '../shared/reducers/APIRequestReducer';
import { alertSVG, alertCloseButtonSVG } from '../helper/utils/SVG';

export default function Alert({ identifier, icon, message, canBeClosed = true }: AlertElement) {
  const dispatch = useAppDispatch();

  return (
    <>
      <Box
        id={`toast-${icon}${identifier}`}
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3"
      >
        <Box
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${alertSVG[icon].color}-500 bg-${alertSVG[icon].color}-100 rounded-lg dark:bg-${alertSVG[icon].color}-800 dark:text-${alertSVG[icon].color}-200`}
          title={t('components.alert.title.icon')}
        >
          {alertSVG[icon].svg}
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
            {alertCloseButtonSVG}
          </button>
        ) : null}
      </Box>
    </>
  );
}
