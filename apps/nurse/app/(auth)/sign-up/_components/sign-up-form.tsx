'use client';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

import {
  RegistrationContextProvider,
  useRegistrationContext,
} from '@/contexts/registration-context';
import { Card } from '@workspace/ui/components/card';
import { toast } from '@workspace/ui/components/sonner';
import { registerSchema, RegisterValues } from '@workspace/zod-schemas';
import { useRouter } from 'next/navigation';
import RenderFromsFooter from './forms-footer';
import RenderFormsHeader from './forms-header';
import RenderSteps from './render-steps';

const isDev = process.env.NODE_ENV === 'development';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function SignUpForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      provideService: undefined,
      'address-line1': '',
      'address-line2': '',
      city: '',
      state: '',
      'postal-code': '',
      weeklyWorkingHours: undefined,
      willingToStartWorking: undefined,
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      password: '',
      isTermsAndConditionAccepted: false,
    },
    mode: 'onChange',
  });

  return (
    <RegistrationContextProvider>
      <FormProvider {...form}>
        <SignUpFormFields />
        {isDev && <DevTool control={form.control} />}
      </FormProvider>
    </RegistrationContextProvider>
  );
}

function SignUpFormFields() {
  const router = useRouter();

  const { step, formRef, startSignUpTransition } = useRegistrationContext();
  const form = useFormContext<RegisterValues>();

  const onError: SubmitErrorHandler<RegisterValues> = (errors) => {
    if (isDev) console.log('validation errors', errors);
    Object.values(errors).forEach((error) => {
      toast.error(error.message, {
        id: `validation-error-${error.message}`,
      });
    });
  };

  const onSubmit: SubmitHandler<RegisterValues> = (data) => {
    if (isDev) console.log('validated data', data);
    startSignUpTransition(async () => {
      await sleep(2000); // simulate API call
      toast.promise(sleep(300), {
        loading: 'Creating your account...',
        success: 'Account created successfully!',
        error: 'Error creating account. Please try again.',
      });
      setTimeout(() => {
        router.push('/onboarding');
        toast.success(
          <pre className={'text-left text-xs overflow-x-scroll'}>
            {JSON.stringify(data, null, 2)}
          </pre>,
        );
      }, 250);
    });
  };

  return (
    <form
      ref={step === 3 ? formRef : undefined}
      className={'max-w-lg mx-auto w-full h-fit relative'}
      onSubmit={form.handleSubmit(onSubmit, onError)}>
      {isDev && <div className={'absolute top-0 left-0'}>{step}</div>}
      <Card
        // className={'max-w-lg w-full h-fit gap-4 py-4'}
        className={'gap-4 py-4'}>
        <RenderFormsHeader />
        <RenderSteps />
        <RenderFromsFooter />
      </Card>
    </form>
  );
}
