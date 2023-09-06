import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import Login from '../../pages/Login';
import { PageURLs } from '../../shared/enums/enums';

interface ProtectedRouteProps {
  component: React.ReactNode;
  isProtected: boolean;
}

export default function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const { component, isProtected } = props;

  if (isProtected) {
    return <>{component}</>;
  } else {
    return <Navigate to={PageURLs.SIGN_IN} />;
  }
}
