import { AddressAutofill } from '@mapbox/search-js-react';
import { Button } from '@workspace/ui/components/button';
import { CardContent } from '@workspace/ui/components/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@workspace/ui/components/command';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { toast } from '@workspace/ui/components/sonner';
import { cn } from '@workspace/ui/lib/utils';
import { RegisterValues } from '@workspace/zod-schemas';
import { Check, ChevronsUpDown, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Step3Values = Pick<
  RegisterValues,
  'address-line1' | 'address-line2' | 'city' | 'state' | 'postal-code'
>;

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
  throw new Error('Mapbox access token is required');
}
export default function Step3Form() {
  const form = useFormContext<Step3Values>();

  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
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
          accessToken={ACCESS_TOKEN!}
          popoverOptions={{
            flip: true,
            placement: 'top-start',
          }}
          // interceptSearch={(value) => {
          //   console.log('interceptSearch', value);
          //   return value;
          // }}
          // onChange={(e) => console.log('onChange', e)}
          onSuggestError={(error) => {
            console.error(error);
            toast.error(error.message, {
              description: 'Please try again later.',
              id: 'address-suggest-error',
            });
            form.setError('address-line1', {
              type: 'manual',
              message: 'Failed to fetch address suggestions. Please try again.',
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
      {/* </Card> */}
    </>
  );
}

const locations = [
  {
    value: 'new-south-wales',
    label: 'New South Wales',
  },
  {
    value: 'victoria',
    label: 'Victoria',
  },
  {
    value: 'queensland',
    label: 'Queensland',
  },
  {
    value: 'south-australia',
    label: 'South Australia',
  },
  {
    value: 'western-australia',
    label: 'Western Australia',
  },
  {
    value: 'tasmania',
    label: 'Tasmania',
  },
  {
    value: 'australian-capital-territory',
    label: 'Australian Capital Territory',
  },
  {
    value: 'northern-territory',
    label: 'Northern Territory',
  },
];

export function Location() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'>
          {value ? (
            locations.find((location) => location.value === value)?.label
          ) : (
            <>
              <SearchIcon className={'size-4'} />
              Select location...
            </>
          )}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-(--radix-popover-trigger-width) p-0'>
        <Command>
          <CommandInput placeholder='Search location...' className='h-9' />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  {location.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === location.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
