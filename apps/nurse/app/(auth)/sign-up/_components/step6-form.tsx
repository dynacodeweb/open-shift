import Link from 'next/link';
import { Controller, useFormContext } from 'react-hook-form';

import { IconQuestionMark } from '@tabler/icons-react';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { CardContent } from '@workspace/ui/components/card';
import { Checkbox } from '@workspace/ui/components/checkbox';
import InputPasswordStrength from '@workspace/ui/components/extends/input-password-strength';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@workspace/ui/components/tooltip';
import { RegisterValues } from '@workspace/zod-schemas';

type Step6Values = Pick<
  RegisterValues,
  | 'firstName'
  | 'lastName'
  | 'mobileNumber'
  | 'email'
  | 'password'
  | 'isTermsAndConditionAccepted'
>;

export default function Step6Form() {
  const form = useFormContext<Step6Values>();

  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
      <CardContent className={'space-y-2'}>
        <FieldSet>
          <FieldGroup className={'gap-3'}>
            <Controller
              name='firstName'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}
                  className={'gap-2'}>
                  <FieldLabel htmlFor='firstName'>First name</FieldLabel>
                  <Input
                    id='firstName'
                    type='text'
                    placeholder='Max'
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError
                      role='alert'
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name='lastName'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className={'gap-2'}
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='lastName'>Last name</FieldLabel>
                  <Input
                    id='lastName'
                    type='text'
                    placeholder='Leiter'
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError
                      role='alert'
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name='mobileNumber'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className={'gap-2'}
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='phone'>Mobile number</FieldLabel>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='04xx xxx xxx'
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError
                      role='alert'
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className={'gap-2'}
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='email'>Email</FieldLabel>
                  <Input
                    id='email'
                    type='email'
                    placeholder='someone@example.com'
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError
                      role='alert'
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            <Controller
              name='password'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  className={'gap-2'}
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='password'>
                    Password
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant='outline'
                          size={'icon-xs'}
                          className={'p-0!'}>
                          <IconQuestionMark className={'size-3'} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side='top'
                        align='start'
                        className={'max-w-sm'}>
                        <p>
                          Create a strong password that is 8+ characters long
                          and includes uppercase and lowercase letters, numbers
                          and special characters (e.g. @, !, #, %).
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </FieldLabel>
                  {fieldState.error ? (
                    <FieldError
                      role='alert'
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  ) : (
                    <>{null}</>
                    // <FieldDescription className={'text-xs'}>
                    //   Create a strong password that is 8+ characters long and
                    //   includes uppercase and lowercase letters, numbers and
                    //   special characters (e.g. @, !, #, %).
                    // </FieldDescription>
                  )}

                  <InputPasswordStrength statusInfo={false} field={field} />
                </Field>
              )}
            />

            <FieldSeparator />

            <Controller
              name='isTermsAndConditionAccepted'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Checkbox
                    id='isTermsAndConditionAccepted'
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldContent>
                    {fieldState.error ? (
                      <FieldLabel htmlFor='isTermsAndConditionAccepted'>
                        <FieldError
                          role='alert'
                          className={'text-xs'}
                          errors={[fieldState.error]}
                        />
                      </FieldLabel>
                    ) : (
                      <FieldLabel htmlFor='isTermsAndConditionAccepted'>
                        <FieldDescription className={'text-xs'}>
                          I agree to Open Service&apos;s Support{' '}
                          <Link
                            href={'#'}
                            className={buttonVariants({
                              variant: 'link',
                              className: 'p-0! h-fit! inline-block text-xs',
                            })}>
                            Worker Terms of Use
                          </Link>{' '}
                          and{' '}
                          <Link
                            href={'#'}
                            className={buttonVariants({
                              variant: 'link',
                              className: 'p-0! h-fit! inline-block text-xs',
                            })}>
                            Privacy Policy
                          </Link>{' '}
                          , and confirm that I have read Open Service&apos;s{' '}
                          <Link
                            href={'#'}
                            className={buttonVariants({
                              variant: 'link',
                              className: 'p-0! h-fit! inline-block text-xs',
                            })}>
                            Privacy Collection Notice
                          </Link>
                        </FieldDescription>
                      </FieldLabel>
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
      </CardContent>
      {/* </Card> */}
    </>
  );
}
