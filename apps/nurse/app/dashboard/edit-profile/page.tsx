'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { Calendar } from '@workspace/ui/components/calendar';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@workspace/ui/components/collapsible';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { toast } from '@workspace/ui/components/sonner';
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
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import {
  Controller,
  FieldValues,
  useForm,
  UseFormReturn,
  useWatch,
} from 'react-hook-form';

export default function EditProfile() {
  const [isNpcOpen, setIsNpcOpen] = useState(false);
  const [isVevoOpen, setIsVevoOpen] = useState(false);
  const [isAhpraOpen, setIsAhpraOpen] = useState(false);
  const [isCprOpen, setIsCprOpen] = useState(false);

  const npcForm = useForm<NPCValues>({
    resolver: isNpcOpen ? zodResolver(npcSchema) : undefined,
    defaultValues: {
      referenceNumber: '',
      dateOfExpiry: undefined,
      providerName: '',
      dateOfIssue: undefined,
    },
  });

  const vevoForm = useForm<VEVOValues>({
    resolver: isVevoOpen ? zodResolver(vevoSchema) : undefined,
    defaultValues: {
      referenceNumber: '',
      dateOfExpiry: undefined,
    },
  });

  const ahpraForm = useForm<AHPRAValues>({
    resolver: isAhpraOpen ? zodResolver(ahpraSchema) : undefined,
    defaultValues: {
      referenceNumber: '',
      dateOfExpiry: undefined,
    },
  });

  const cprForm = useForm<CPRValues>({
    resolver: isCprOpen ? zodResolver(cprSchema) : undefined,
    defaultValues: {
      referenceNumber: '',
      dateOfExpiry: undefined,
    },
  });

  const npcWatch = useWatch({ control: npcForm.control });
  const vevoWatch = useWatch({ control: vevoForm.control });
  const ahpraWatch = useWatch({ control: ahpraForm.control });
  const cprWatch = useWatch({ control: cprForm.control });

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const results = {
      npc: isNpcOpen ? await npcForm.trigger() : null,
      vevo: isVevoOpen ? await vevoForm.trigger() : null,
      ahpra: isAhpraOpen ? await ahpraForm.trigger() : null,
      cpr: isCprOpen ? await cprForm.trigger() : null,
    };

    // Check if any opened form has errors
    const hasErrors = Object.entries(results).some(
      ([key, valid]) => valid === false,
    );

    if (hasErrors) {
      console.log('Form has errors');
      return;
    }

    // Collect all data from opened forms
    const allData = {
      ...(isNpcOpen && { npc: npcForm.getValues() }),
      ...(isVevoOpen && { vevo: vevoForm.getValues() }),
      ...(isAhpraOpen && { ahpra: ahpraForm.getValues() }),
      ...(isCprOpen && { cpr: cprForm.getValues() }),
    };

    console.log('Submitted data:', allData);
    toast.success(
      <pre className='bg-gray-900 text-white overflow-x-scroll p-2 rounded-md'>
        {JSON.stringify(allData, null, 2)}
      </pre>,
    );
  };

  const isAnyFormOpen = isNpcOpen || isVevoOpen || isAhpraOpen || isCprOpen;
  const allFormsValid =
    (!isNpcOpen || npcForm.formState.isValid) &&
    (!isVevoOpen || vevoForm.formState.isValid) &&
    (!isAhpraOpen || ahpraForm.formState.isValid) &&
    (!isCprOpen || cprForm.formState.isValid);

  return (
    <Card className={'bg-transparent shadow-none p-0 border-0'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-4xl font-bold'}>Set up your account</h2>
        </CardTitle>
      </CardHeader>

      <div className={'grid grid-cols-3'}>
        <CardContent className={'max-w-3xl col-span-full lg:col-span-2'}>
          <form className={'space-y-6'} onSubmit={handleSubmit}>
            <Form1 isOpen={isNpcOpen} setIsOpen={setIsNpcOpen} form={npcForm} />

            <Form2
              isOpen={isVevoOpen}
              setIsOpen={setIsVevoOpen}
              form={vevoForm}
            />

            <Form3
              isOpen={isAhpraOpen}
              setIsOpen={setIsAhpraOpen}
              form={ahpraForm}
            />

            <Form4 isOpen={isCprOpen} setIsOpen={setIsCprOpen} form={cprForm} />

            <div className='flex flex-col items-center space-y-2'>
              <div className={'flex items-center gap-4'}>
                <Button
                  variant={'skewed'}
                  disabled={!isAnyFormOpen || !allFormsValid}
                  size={'lg'}>
                  Submit
                </Button>
                <Link
                  href={'/dashboard'}
                  className={buttonVariants({
                    variant: 'skewed-outline',
                    size: 'lg',
                  })}>
                  Skip for now
                </Link>
              </div>
              <p className={'text-sm text-muted-foreground'}>
                After filling all details button will show up
              </p>
            </div>
          </form>
        </CardContent>

        <CardContent
          className={'overflow-x-scroll col-span-full lg:col-span-1'}>
          <pre className={'text-xs bg-gray-900 p-4 rounded-md text-white'}>
            {JSON.stringify(
              {
                npc: npcWatch,
                vevo: vevoWatch,
                ahpra: ahpraWatch,
                cpr: cprWatch,
              },
              null,
              2,
            )}
          </pre>
        </CardContent>
      </div>
    </Card>
  );
}

type FormProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  form: UseFormReturn<FieldValues>;
};

function Form1({ isOpen, setIsOpen, form }: FormProps) {
  const [isPopOver1Opened, setIsPopOver1Opened] = useState(false);
  const [isPopOver2Opened, setIsPopOver2Opened] = useState(false);
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CardTitle>NPC (National Police Check)</CardTitle>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button
                variant={!isOpen ? 'default' : 'destructive'}
                size='sm'
                className={'rounded-full!'}>
                <span className='[[data-state=open]>&]:hidden'>Yes</span>
                <span className='[[data-state=closed]>&]:hidden'>No</span>
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>

        <CollapsibleContent className={'pt-3'}>
          <FormShell>
            <FieldGroup>
              <FieldSet>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                  <Controller
                    name='referenceNumber'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='reference-number'>
                          Reference Number
                        </FieldLabel>
                        <Input
                          id='reference-number'
                          placeholder='ex: 123456'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />

                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='reference-number-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            Your unique reference number
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name='dateOfIssue'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor='date-of-issue'>
                          Date of Issue
                        </FieldLabel>
                        <Popover
                          open={isPopOver1Opened}
                          onOpenChange={setIsPopOver1Opened}>
                          <PopoverTrigger asChild>
                            <Button
                              className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                              data-empty={!field.value}
                              variant='outline'>
                              <CalendarIcon />
                              {/* {date ? (
                                format(date, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )} */}

                              {field.value ? (
                                field.value.toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  timeZone: timeZone,
                                })
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              onSelect={(date) => {
                                field.onChange(date);
                                setIsPopOver1Opened(false);
                              }}
                              selected={field.value}
                              timeZone={timeZone}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='date-of-issue-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The date when the NPC was issued
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                  <Controller
                    name='providerName'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='provider-name'>
                          Provider&apos;s Name
                        </FieldLabel>
                        <Input
                          id='provider-name'
                          placeholder='ex: ABC Security Services'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />

                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='provider-name-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The name of the organization that provided the NPC
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name='dateOfExpiry'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor='date-of-expiry'>
                          Date of Expiry
                        </FieldLabel>
                        <Popover
                          open={isPopOver2Opened}
                          onOpenChange={setIsPopOver2Opened}>
                          <PopoverTrigger asChild>
                            <Button
                              className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                              data-empty={!field.value}
                              variant='outline'>
                              <CalendarIcon />
                              {/* {date ? (
                                format(date, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )} */}

                              {field.value ? (
                                field.value.toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  timeZone: timeZone,
                                })
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              onSelect={(date) => {
                                field.onChange(date);
                                setIsPopOver2Opened(false);
                              }}
                              selected={field.value}
                              timeZone={timeZone}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='date-of-expiry-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The date when the NPC expires
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                </div>
              </FieldSet>
            </FieldGroup>
          </FormShell>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function Form2({ isOpen, setIsOpen, form }: FormProps) {
  const [isPopOverOpened, setIsPopOverOpened] = useState(false);
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CardTitle>VEVO (Right to Work) - Verified by Open Shift</CardTitle>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button
                variant={!isOpen ? 'default' : 'destructive'}
                size='sm'
                className={'rounded-full!'}>
                <span className='[[data-state=open]>&]:hidden'>Yes</span>
                <span className='[[data-state=closed]>&]:hidden'>No</span>
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>

        <CollapsibleContent className={'pt-3'}>
          <FormShell>
            <FieldGroup>
              <FieldSet>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                  <Controller
                    name='referenceNumber'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='reference-number'>
                          Reference Number
                        </FieldLabel>
                        <Input
                          id='reference-number'
                          placeholder='ex: 123456'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />

                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='reference-number-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            Your unique reference number
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name='dateOfExpiry'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor='date-of-expiry'>
                          Date of Expiry
                        </FieldLabel>
                        <Popover
                          open={isPopOverOpened}
                          onOpenChange={setIsPopOverOpened}>
                          <PopoverTrigger asChild>
                            <Button
                              className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                              data-empty={!field.value}
                              variant='outline'>
                              <CalendarIcon />
                              {/* {date ? (
                                format(date, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )} */}

                              {field.value ? (
                                field.value.toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  timeZone: timeZone,
                                })
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              onSelect={(date) => {
                                field.onChange(date);
                                setIsPopOverOpened(false);
                              }}
                              selected={field.value}
                              timeZone={timeZone}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='date-of-expiry-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The date when the NPC expires
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                </div>
              </FieldSet>
            </FieldGroup>
          </FormShell>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function Form3({ isOpen, setIsOpen, form }: FormProps) {
  const [isPopOverOpened, setIsPopOverOpened] = useState(false);
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CardTitle>AHPRA Registration - Verified by Open Shift</CardTitle>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button
                variant={!isOpen ? 'default' : 'destructive'}
                size='sm'
                className={'rounded-full!'}>
                <span className='[[data-state=open]>&]:hidden'>Yes</span>
                <span className='[[data-state=closed]>&]:hidden'>No</span>
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>

        <CollapsibleContent className={'pt-3'}>
          <FormShell>
            <FieldGroup>
              <FieldSet>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                  <Controller
                    name='referenceNumber'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='reference-number'>
                          Reference Number
                        </FieldLabel>
                        <Input
                          id='reference-number'
                          placeholder='ex: 123456'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />

                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='reference-number-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            Your unique reference number
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name='dateOfExpiry'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor='date-of-expiry'>
                          Date of Expiry
                        </FieldLabel>
                        <Popover
                          open={isPopOverOpened}
                          onOpenChange={setIsPopOverOpened}>
                          <PopoverTrigger asChild>
                            <Button
                              className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                              data-empty={!field.value}
                              variant='outline'>
                              <CalendarIcon />
                              {/* {date ? (
                                format(date, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )} */}

                              {field.value ? (
                                field.value.toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  timeZone: timeZone,
                                })
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              onSelect={(date) => {
                                field.onChange(date);
                                setIsPopOverOpened(false);
                              }}
                              selected={field.value}
                              timeZone={timeZone}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='date-of-expiry-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The date when the NPC expires
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                </div>
              </FieldSet>
            </FieldGroup>
          </FormShell>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function Form4({ isOpen, setIsOpen, form }: FormProps) {
  const [isPopOverOpened, setIsPopOverOpened] = useState(false);
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader>
          <CardTitle>CPR - Verified by Open Shift</CardTitle>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button
                variant={!isOpen ? 'default' : 'destructive'}
                size='sm'
                className={'rounded-full!'}>
                <span className='[[data-state=open]>&]:hidden'>Yes</span>
                <span className='[[data-state=closed]>&]:hidden'>No</span>
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>

        <CollapsibleContent className={'pt-3'}>
          <FormShell>
            <FieldGroup>
              <FieldSet>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                  <Controller
                    name='referenceNumber'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='reference-number'>
                          Reference Number
                        </FieldLabel>
                        <Input
                          id='reference-number'
                          placeholder='ex: 123456'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />

                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='reference-number-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            Your unique reference number
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name='dateOfExpiry'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor='date-of-expiry'>
                          Date of Expiry
                        </FieldLabel>
                        <Popover
                          open={isPopOverOpened}
                          onOpenChange={setIsPopOverOpened}>
                          <PopoverTrigger asChild>
                            <Button
                              className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                              data-empty={!field.value}
                              variant='outline'>
                              <CalendarIcon />
                              {/* {date ? (
                                format(date, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )} */}

                              {field.value ? (
                                field.value.toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  timeZone: timeZone,
                                })
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              onSelect={(date) => {
                                field.onChange(date);
                                setIsPopOverOpened(false);
                              }}
                              selected={field.value}
                              timeZone={timeZone}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error ? (
                          <FieldError
                            role='alert'
                            id='date-of-expiry-error'
                            errors={[fieldState.error]}
                          />
                        ) : (
                          <FieldDescription>
                            The date when the NPC expires
                          </FieldDescription>
                        )}
                      </Field>
                    )}
                  />
                </div>
              </FieldSet>
            </FieldGroup>
          </FormShell>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function FormShell({ children }: { children: React.ReactNode }) {
  return (
    <CardContent>
      <Card className={'bg-white rounded-md'}>
        <CardContent className=''>{children}</CardContent>
      </Card>
    </CardContent>
  );
}
