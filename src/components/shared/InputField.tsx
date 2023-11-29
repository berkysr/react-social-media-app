import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { isMobile } from 'react-device-detect';
interface FormInputProps {
  label: string;
  type: string;
  name: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
  value: string;
  helperText: string;
  id: string;
  placeHolder: string;
  tooltip?: {
    icon: JSX.Element;
    text: string;
  };
}

export default function FormInput({ label = '', type, name, onChange, value, helperText, id, placeHolder, tooltip }: FormInputProps) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={0.5}
      >
        <label className="text-sm">{label}</label>

        {tooltip ? (
          <Tooltip
            placement={`${isMobile ? 'bottom' : 'right'}`}
            title={tooltip.text}
          >
            <IconButton>{tooltip.icon}</IconButton>
          </Tooltip>
        ) : null}
      </Box>

      <input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="border-solid rounded-xl border-grey border-2 p-2.5 mt-1.5 focus:mt-[-50] focus:border-blue-500 focus:outline-none"
        placeholder={placeHolder}
      />

      {helperText ? <p className="text-red-600 pt-2">{helperText}</p> : null}
    </>
  );
}
