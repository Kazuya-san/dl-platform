'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';

export const SignOut = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  if (user || isLoading) return null;

  return <>{children}</>;
};

export default SignOut;
