'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { Skeleton } from '@workspace/ui/components/skeleton';
import dynamic from 'next/dynamic';

export const LazyAddressAutofill = dynamic(() => import('./autofill'), {
  ssr: false,
  loading: () => (
    <Card className={'max-w-lg mx-auto w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>Where are you located?</h2>
        </CardTitle>
        <CardDescription>State/Postcode/Suburb*</CardDescription>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-3/12'} />
          <Skeleton className={'h-10 w-full'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-4/12'} />
          <Skeleton className={'h-10 w-full'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-2/12'} />
          <Skeleton className={'h-10 w-full'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-4/12'} />
          <Skeleton className={'h-10 w-full'} />
        </div>
        <div className={'space-y-2'}>
          <Skeleton className={'h-3 w-4/12'} />
          <Skeleton className={'h-10 w-full'} />
        </div>
      </CardContent>

      <CardFooter>
        <Skeleton className={'w-full h-10 mt-3'} />
      </CardFooter>
    </Card>
  ),
});
