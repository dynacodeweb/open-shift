import { IconReload } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { useRegistrationContext } from '@/contexts/registration-context';
import { Button } from '@workspace/ui/components/button';
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { RegisterValues } from '@workspace/zod-schemas';

const isDev = process.env.NODE_ENV === 'development';

export default function RenderFormsHeader() {
  const { step } = useRegistrationContext();
  const form = useFormContext<RegisterValues>();

  switch (step) {
    case 1:
      return (
        <CardHeader>
          <CardTitle>
            <h2 className={'text-xl'}>
              What is the main service you would like to provide on Mable? *
            </h2>
          </CardTitle>
          {isDev && (
            <CardAction onClick={() => form.reset()}>
              <Button type='button' variant={'destructive'} size={'icon-sm'}>
                <IconReload className={'size-4'} />
              </Button>
            </CardAction>
          )}
        </CardHeader>
      );

    case 2:
      break;

    case 3:
      return (
        <CardHeader>
          <CardTitle>
            <h2 className={'text-xl'}>Where are you located?</h2>
          </CardTitle>
          <CardDescription>State/Postcode/Suburb*</CardDescription>
          <CardAction onClick={() => form.reset()}>
            <Button type='button' variant={'destructive'} size={'icon-sm'}>
              <IconReload className={'size-4'} />
            </Button>
          </CardAction>
        </CardHeader>
      );

    case 4:
      return (
        <CardHeader>
          <CardTitle>
            <h2 className={'text-xl'}>
              How many hours a week would you like to work on the platform?
            </h2>
          </CardTitle>
          <CardAction onClick={() => form.reset()}>
            <Button type='button' variant={'destructive'} size={'icon-sm'}>
              <IconReload className={'size-4'} />
            </Button>
          </CardAction>
        </CardHeader>
      );

    case 5:
      return (
        <CardHeader>
          <CardTitle>
            <h2 className={'text-xl'}>When would you like to start working?</h2>
          </CardTitle>
          <CardAction onClick={() => form.reset()}>
            <Button type='button' variant={'destructive'} size={'icon-sm'}>
              <IconReload className={'size-4'} />
            </Button>
          </CardAction>
        </CardHeader>
      );

    case 6:
      return (
        <CardHeader>
          <CardTitle>
            <h2 className={'text-xl'}>Please provide your details</h2>
          </CardTitle>
          <CardAction onClick={() => form.reset()}>
            <Button type='button' variant={'destructive'} size={'icon-sm'}>
              <IconReload className={'size-4'} />
            </Button>
          </CardAction>
        </CardHeader>
      );

    default:
      return `No header for step ${step}`;
  }
}
