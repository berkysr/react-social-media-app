import React from 'react';
import { Navigate } from 'react-router-dom';
import { PageURLs } from '@helpers/enums/enums';

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
