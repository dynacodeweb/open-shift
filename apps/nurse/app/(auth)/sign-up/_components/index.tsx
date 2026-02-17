'use client';

import dynamic from 'next/dynamic';

export const LazySignUpForms = dynamic(() => import('./sign-up-form'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
