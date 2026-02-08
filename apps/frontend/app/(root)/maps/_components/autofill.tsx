import { zodResolver } from '@hookform/resolvers/zod';
import { AddressAutofillRetrieveResponse } from '@mapbox/search-js-core';
import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
} from '@mapbox/search-js-react';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import { toast } from '@workspace/ui/components/sonner';
import { AddressValues, addressSchema } from '@workspace/zod-schemas';
import { useState, useTransition } from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

export default function AutofillInput() {
  const [minimapFeature, setMinimapFeature] =
    useState<AddressAutofillRetrieveResponse['features'][0]>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<AddressValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      'address-line1': '',
      'address-line2': '',
      city: '',
      state: '',
      'postal-code': '',
    },
    mode: 'onChange',
  });

  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  if (!ACCESS_TOKEN) {
    throw new Error('Mapbox access token is required');
  }

  const { formRef, showConfirm } = useConfirmAddress({
    accessToken: ACCESS_TOKEN,
    footer: 'My custom footer',
    theme: {
      variables: {
        border: '3px solid rgba(0,0,0,0.35)',
        borderRadius: '18px',
      },
    },
    minimap: {
      defaultMapStyle: ['mapbox', 'outdoors-v11'],
      satelliteToggle: true,
    },
    skipConfirmModal: (feature) => false, // overrides default behavior, show dialog every time
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const handleAutofillRetrieve = (
    response: AddressAutofillRetrieveResponse,
  ) => {
    console.log('retrieve response', response);
    if (!response.features || !response.features.length) {
      console.warn('No features returned from AddressAutofill');
      setMinimapFeature(undefined);
      return;
    }
    setMinimapFeature(response.features[0]);
  }; // [[React checkout example](https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/)]

  // const handleSubmit = useCallback(
  //   async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     const result = await showConfirm();

  //     if (result.type === 'nochange') {
  //       // user kept their original address

  //       const formData = new FormData(e.target as HTMLFormElement);

  //       setFormData(formData);
  //       // submitForm(); // your submit logic
  //       console.log('result nochange', result);
  //       console.log('formData', Object.fromEntries(formData.entries()));
  //     }

  //     if (result.type === 'change') {
  //       // user chose a better match in the dialog
  //       // result.feature contains the standardized address feature
  //       // submitFormWithChanges(result.feature); // your submit logic
  //       console.log('result change', result);
  //     }

  //     if (result.type === 'cancel') {
  //       // user closed the dialog; do nothing or show a message
  //       console.log('result cancel', result);
  //     }
  //   },
  //   [showConfirm],
  // );

  console.log({ minimapFeature });

  const onError: SubmitErrorHandler<AddressValues> = (errors) => {
    console.log('validation errors', errors);
    Object.values(errors).forEach((error) => {
      toast.error(error.message, {
        id: `validation-error-${error.message}`,
      });
    });
  };

  const onSubmit: SubmitHandler<AddressValues> = (data) => {
    // console.log('validated data', data);
    startTransition(async () => {
      const result = await showConfirm({});

      if (result.type === 'nochange') {
        // user kept their original address
        // submitForm(); // your submit logic
        console.log('result nochange', result);
        toast.success(
          <pre className={'text-left text-xs overflow-x-scroll'}>
            {JSON.stringify(data, null, 2)}
          </pre>,
        );
        return;
      }

      if (result.type === 'change') {
        // user chose a better match in the dialog
        // result.feature contains the standardized address feature
        // submitFormWithChanges(result.feature); // your submit logic
        console.log('result change', result);
        // Update form with the corrected address from Mapbox
        const props = result.feature?.properties;
        if (props) {
          form.setValue('address-line1', props['address_line1'] ?? '');
          form.setValue('city', props['address_level2'] ?? '');
          form.setValue('state', props['address_level1'] ?? '');
          form.setValue('postal-code', props['postcode'] ?? '');
        }
        toast.success(
          <div>
            <p>Address updated to:</p>
            <pre className={'text-left text-xs overflow-x-scroll'}>
              {JSON.stringify(result.feature, null, 2)}
            </pre>
          </div>,
        );
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
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={
          // (e) => {
          // e.preventDefault();
          // handleSubmit(e);
          // }
          form.handleSubmit(onSubmit, onError)
        }>
        <Card className={'max-w-lg mx-auto w-full h-fit gap-4 py-4'}>
          <CardHeader>
            <CardTitle>
              <h2 className={'text-xl'}>Where are you located?</h2>
            </CardTitle>
            <CardDescription>State/Postcode/Suburb*</CardDescription>
          </CardHeader>
          <CardContent className={'space-y-4'}>
            <AddressAutofill
              options={{
                country: 'au',
                // country: 'in',
                limit: 5,
                streets: true,
                language: 'en',
                // bbox: [139.965, -38.03, 155.258, -27.839],
                bbox: [111.74475, -44.38997, 155.7381, -10.47687],
              }}
              accessToken={ACCESS_TOKEN}
              popoverOptions={{
                flip: true,
                placement: 'top-start',
              }}
              interceptSearch={(value) => {
                console.log('interceptSearch', value);
                return value;
              }}
              onChange={(e) => console.log('onChange', e)}
              onRetrieve={(response) => {
                console.log('onRetrieve fired', response);
                handleAutofillRetrieve(response);
              }}
              onSuggestError={(error) => {
                console.error(error);
                toast.error(error.message, {
                  description: 'Please try again later.',
                  id: 'address-suggest-error',
                });
              }}>
              <FieldGroup className={'gap-3'}>
                <Controller
                  name='address-line1'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='address-line1'>
                        Street Address
                      </FieldLabel>
                      <Input
                        id='address-line1'
                        type='text'
                        autoComplete='address-line1'
                        placeholder='Street address'
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name='address-line2'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='address-line2'>
                        Apartment, suite, etc. (optional)
                      </FieldLabel>
                      <Input
                        id='address-line2'
                        type='text'
                        autoComplete='address-line2'
                        placeholder='Apartment, suite, etc.'
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name='city'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='city'>City</FieldLabel>
                      <Input
                        id='city'
                        type='text'
                        autoComplete='address-level2'
                        placeholder='City'
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name='state'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='state'>State / Region</FieldLabel>
                      <Input
                        id='state'
                        type='text'
                        autoComplete='address-level1'
                        placeholder='State / Region'
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name='postal-code'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='postal-code'>
                        ZIP / Postcode (optional)
                      </FieldLabel>
                      <Input
                        id='postal-code'
                        type='text'
                        autoComplete='postal-code'
                        placeholder='ZIP / Postcode'
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </AddressAutofill>
          </CardContent>

          <CardContent>
            {minimapFeature && (
              <div style={{ height: 180, width: '100%', marginTop: 18 }}>
                <AddressMinimap
                  feature={minimapFeature}
                  show
                  satelliteToggle
                  canAdjustMarker
                  footer
                  accessToken={ACCESS_TOKEN}
                />
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button type='submit' className={'w-full'} disabled={isPending}>
              {isPending ? 'Checking address...' : 'Confirm Address'}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
