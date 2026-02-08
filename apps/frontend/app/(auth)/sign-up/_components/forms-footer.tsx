import Link from 'next/link';
import { useFormContext, useWatch } from 'react-hook-form';

import { useRegistrationContext } from '@/contexts/registration-context';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { CardFooter } from '@workspace/ui/components/card';
import { toast } from '@workspace/ui/components/sonner';
import { Spinner } from '@workspace/ui/components/spinner';
import { cn } from '@workspace/ui/lib/utils';
import { RegisterValues } from '@workspace/zod-schemas';
import { useTransition } from 'react';

const isDev = process.env.NODE_ENV === 'development';

export default function RenderFromsFooter() {
  const [isAddressPending, startAddressTransition] = useTransition();
  const {
    step,
    prevStep,
    nextStep,
    isValidAddress,
    onAddressValidation,
    showConfirm,
    isSignUpPending,
  } = useRegistrationContext();
  const form = useFormContext<RegisterValues>();

  const valuesWatched = useWatch({ control: form.control });

  const isStep1Valid = valuesWatched.provideService !== undefined;
  const isStep3Valid =
    valuesWatched['address-line1'] !== '' &&
    valuesWatched.city !== '' &&
    valuesWatched.state !== '';
  const isStep4Valid = valuesWatched.weeklyWorkingHours !== undefined;
  const isStep5Valid = valuesWatched.willingToStartWorking !== undefined;
  const isStep6Valid =
    valuesWatched.firstName !== '' &&
    valuesWatched.lastName !== '' &&
    valuesWatched.mobileNumber !== '' &&
    valuesWatched.email !== '' &&
    valuesWatched.password !== '' &&
    valuesWatched.isTermsAndConditionAccepted === true;
  const allStepsValid =
    isStep1Valid && isStep3Valid && isStep4Valid && isStep5Valid && isStep6Valid
      ? false
      : true;

  function validateAddress() {
    startAddressTransition(async () => {
      const result = await showConfirm();

      if (result.type === 'nochange') {
        // user kept their original address
        // submitForm(); // your submit logic
        console.log('result nochange', result);
        nextStep(4);
        onAddressValidation(true);
        return;
      }

      if (result.type === 'change') {
        // user chose a better match in the dialog
        // result.feature contains the standardized address feature
        // submitFormWithChanges(result.feature); // your submit logic
        console.log('result change', result);
        return;
      }

      if (result.type === 'cancel') {
        // user closed the dialog; do nothing or show a message
        console.log('result cancel', result);
        toast.info('Address confirmation cancelled', {
          id: 'address-confirmation-cancelled',
        });
        return;
      }
    });
  }

  switch (step) {
    case 1:
      return (
        <CardFooter className={'flex items-center justify-between'}>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'skewed-outline',
              className: 'rounded-[4px]!',
            })}>
            Back
          </Link>
          <Button
            type='button'
            variant={'skewed'}
            className='rounded-[4px]!'
            onClick={() => {
              nextStep(2);
              form.trigger('provideService');
            }}>
            Next
          </Button>
        </CardFooter>
      );

    case 2:
      return (
        <CardFooter className={'flex items-center justify-between'}>
          <Button
            type='button'
            variant={'skewed-outline'}
            className='rounded-[4px]!'
            onClick={() => prevStep(1)}>
            Back
          </Button>
          <Button
            type='button'
            disabled={!isStep1Valid}
            variant={'skewed'}
            className='rounded-[4px]!'
            onClick={() => prevStep(3)}>
            Next
          </Button>
        </CardFooter>
      );

    case 3:
      return (
        <CardFooter
          className={cn(
            'flex',
            isDev ? 'items-center justify-between' : 'justify-end',
          )}>
          {isDev && (
            <Button
              type='button'
              variant={'skewed-outline'}
              className='rounded-[4px]!'
              onClick={() => prevStep(2)}>
              Back
            </Button>
          )}
          {!isValidAddress ? (
            <Button
              type='button'
              variant={'skewed'}
              disabled={isAddressPending || !isStep3Valid}
              className='rounded-[4px]!'
              // onClick={() => prevStep(4)}
              onClick={() => validateAddress()}>
              {isAddressPending ? (
                <span className={'inline-flex items-center gap-2'}>
                  Validating address...
                  <Spinner className={'size-4'} />
                </span>
              ) : (
                <span>Validate address</span>
              )}
            </Button>
          ) : (
            <Button
              type='button'
              variant={'skewed'}
              className='rounded-[4px]!'
              disabled={!isStep3Valid}
              onClick={() => nextStep(4)}>
              Next
            </Button>
          )}
        </CardFooter>
      );

    case 4:
      return (
        <>
          {isDev && (
            <CardFooter className={'flex items-center justify-between'}>
              <Button
                type='button'
                variant={'skewed-outline'}
                className='rounded-[4px]!'
                onClick={() => prevStep(3)}>
                Back
              </Button>
              <Button
                type='button'
                variant={'skewed'}
                className='rounded-[4px]!'
                onClick={() => prevStep(5)}>
                Next
              </Button>
            </CardFooter>
          )}
        </>
      );

    case 5:
      return (
        <>
          {isDev && (
            <CardFooter className={'flex items-center justify-between'}>
              <Button
                type='button'
                variant={'skewed-outline'}
                className='rounded-[4px]!'
                onClick={() => prevStep(4)}>
                Back
              </Button>
              <Button
                type='button'
                variant={'skewed'}
                className='rounded-[4px]!'
                onClick={() => prevStep(6)}>
                Next
              </Button>
            </CardFooter>
          )}
        </>
      );

    case 6:
      return (
        <CardFooter
          className={cn(
            'flex',
            isDev
              ? 'items-center justify-between'
              : 'justify-center self-center',
          )}>
          {isDev && (
            <Button
              type='button'
              className={'rounded-[4px]!'}
              variant={'skewed-outline'}
              onClick={() => prevStep(5)}>
              Back
            </Button>
          )}
          <Button
            disabled={allStepsValid || isSignUpPending}
            type={'submit'}
            className={'rounded-[4px]'}
            variant={'skewed'}>
            {isSignUpPending ? (
              <span className={'inline-flex items-center gap-2'}>
                Creating account...
                <Spinner className={'size-4'} />
              </span>
            ) : (
              <span>Create account</span>
            )}
          </Button>
        </CardFooter>
      );

    default:
      return `Error: Invalid step ${step}`;
  }
}
