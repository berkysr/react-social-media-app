import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { t } from 'i18next';
import React from 'react';

interface NavbarMenuElementProps {
  children: ReactJSXElement;
  infoText: string;
}

export default function NavbarMenuElement({ children, infoText }: NavbarMenuElementProps) {
  return (
    <li className="flex items-center mb-5 cursor-pointer">
      {children}

      <p className="capitalize">{t(`components.sidebar.${infoText}`)}</p>
    </li>
  );
}
