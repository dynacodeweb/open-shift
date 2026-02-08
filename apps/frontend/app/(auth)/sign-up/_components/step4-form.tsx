import { ChevronRightIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRegistrationContext } from '@/contexts/registration-context';
import { Button } from '@workspace/ui/components/button';
import { CardContent } from '@workspace/ui/components/card';
import { Field } from '@workspace/ui/components/field';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from '@workspace/ui/components/item';
import { RegisterValues } from '@workspace/zod-schemas';

const weeklyWorkingHoursOptions = [
  { value: '1-10', label: '1-10 hours of work per week' },
  { value: '11-25', label: '11-25 hours of work per week' },
  { value: '26-35', label: '26-35 hours of work per week' },
  { value: '36+', label: 'More than 36 hours per week' },
];

type Step4Values = Pick<RegisterValues, 'weeklyWorkingHours'>;
export default function Step4Form() {
  const form = useFormContext<Step4Values>();
  const { nextStep } = useRegistrationContext();

  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
      <CardContent className={'space-y-4'}>
        <Controller
          control={form.control}
          name='weeklyWorkingHours'
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              {weeklyWorkingHoursOptions.map((option) => {
                const isSelected = field.value === option.value;
                return (
                  <Item
                    variant={!isSelected ? 'outline' : 'success'}
                    size={'sm'}
                    key={option.value}>
                    <ItemContent>
                      <ItemTitle>{option.label}</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <Button
                        variant={isSelected ? 'default' : 'outline'}
                        size='icon-sm'
                        onClick={() => {
                          field.onChange(option.value);
                          nextStep(5);
                        }}>
                        <ChevronRightIcon />
                      </Button>
                    </ItemActions>
                  </Item>
                );
              })}
            </Field>
          )}
        />
      </CardContent>
      {/* </Card> */}
    </>
  );
}
