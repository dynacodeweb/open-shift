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

const willingToStartWorkingOptions = [
  { value: 'immediately', label: 'Immediately' },
  { value: 'within_the_next_2_weeks', label: 'Within the next 2 Weeks' },
  { value: 'in_2_4_weeks', label: 'In 2-4 weeks' },
  { value: 'later_than_4_weeks', label: 'Later than 4 weeks' },
  { value: 'i_am_not_sure', label: 'I’m not sure' },
];

type Step5Values = Pick<RegisterValues, 'willingToStartWorking'>;

export default function Step5Form() {
  const form = useFormContext<Step5Values>();
  const { nextStep } = useRegistrationContext();

  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
      <CardContent className={'space-y-4'}>
        <Controller
          control={form.control}
          name='willingToStartWorking'
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              {willingToStartWorkingOptions.map((option) => {
                const isSelected = field.value === option.value;
                return (
                  <Item
                    variant={isSelected ? 'success' : 'outline'}
                    size={'sm'}
                    key={option.value}>
                    <ItemContent>
                      <ItemTitle>{option.label}</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <Button
                        variant={!isSelected ? 'outline' : 'default'}
                        size='icon-sm'
                        onClick={() => {
                          nextStep(6);
                          field.onChange(option.value);
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
