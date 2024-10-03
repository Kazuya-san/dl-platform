'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';

export const SignIn = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user) return null;

  return <>{children}</>;
};

export default SignIn;
