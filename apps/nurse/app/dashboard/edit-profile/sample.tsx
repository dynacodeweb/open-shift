import { zodResolver } from '@hookform/resolvers/zod';
import {
  ahpraSchema,
  AHPRAValues,
  cprSchema,
  CPRValues,
  npcSchema,
  NPCValues,
  vevoSchema,
  VEVOValues,
} from '@workspace/zod-schemas';
import { useMemo, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

type FormType = 'npc' | 'vevo' | 'ahpra' | 'cpr' | null;

export default function Sample() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const { schema, defaultValues } = useMemo(() => {
    switch (activeForm) {
      case 'npc':
        return {
          schema: npcSchema,
          defaultValues: {
            referenceNumber: '',
            dateOfExpiry: undefined,
            providerName: '',
            dateOfIssue: undefined,
          },
        };
      case 'vevo':
        return {
          schema: vevoSchema,
          defaultValues: { referenceNumber: '', dateOfExpiry: undefined },
        };
      case 'ahpra':
        return {
          schema: ahpraSchema,
          defaultValues: { referenceNumber: '', dateOfExpiry: undefined },
        };
      case 'cpr':
        return {
          schema: cprSchema,
          defaultValues: { referenceNumber: '', dateOfExpiry: undefined },
        };
      default:
        throw new Error('No active form selected');
    }
  }, [activeForm]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<NPCValues | VEVOValues | AHPRAValues | CPRValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFormToggle = (formType: FormType, isOpen: boolean) => {
    if (isOpen) {
      setActiveForm(formType);
    } else if (activeForm === formType) {
      setActiveForm(null);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onError: SubmitErrorHandler<
    NPCValues | VEVOValues | AHPRAValues | CPRValues
  > = (errors) => {
    console.log('Form errors:', errors);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<
    NPCValues | VEVOValues | AHPRAValues | CPRValues
  > = (data) => {
    console.log('Form data submitted:', data);
  };

  return <></>;
}
