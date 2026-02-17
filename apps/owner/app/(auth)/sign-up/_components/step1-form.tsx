import { ChevronRight, FlaskConicalIcon, StethoscopeIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRegistrationContext } from '@/contexts/registration-context';
import { Button } from '@workspace/ui/components/button';
import { CardContent } from '@workspace/ui/components/card';
import { Field, FieldError } from '@workspace/ui/components/field';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import { RegisterValues } from '@workspace/zod-schemas';

const provideServiceOptions = [
  {
    id: crypto.randomUUID(),
    value: 'nursing',
    label: 'Nursing',
    icon: StethoscopeIcon,
    description: 'I am a Registered or Enrolled Nurse.',
  },
  {
    id: crypto.randomUUID(),
    value: 'personal_care',
    label: 'Personal Care',
    icon: FlaskConicalIcon,
    description:
      'I am an occupational therapist, physiotherapist, psychologist, or speech pathologist.',
  },
];

type Step1Values = Pick<RegisterValues, 'provideService'>;

export default function Step1Form() {
  const form = useFormContext<Step1Values>();
  const { nextStep } = useRegistrationContext();

  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
      <CardContent className={'space-y-4'}>
        <Controller
          name='provideService'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              {provideServiceOptions.map((option) => {
                const isSelected = field.value === option.value;
                return (
                  <Item
                    variant={!isSelected ? 'outline' : 'success'}
                    size={'sm'}
                    key={option.id}>
                    <ItemMedia>
                      <option.icon className='size-5' />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className={'text-base font-semibold'}>
                        {option.label}
                      </ItemTitle>
                      <ItemDescription>{option.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button
                        variant={isSelected ? 'default' : 'outline'}
                        size='icon-sm'
                        onClick={() => {
                          field.onChange(option.value);
                          nextStep(2);
                        }}>
                        <ChevronRight />
                      </Button>
                    </ItemActions>
                  </Item>
                );
              })}

              {fieldState.error && (
                <FieldError role='alert' errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </CardContent>
      {/* </Card> */}
    </>
  );
}
