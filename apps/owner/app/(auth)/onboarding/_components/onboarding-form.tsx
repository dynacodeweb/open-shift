'use client';

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
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import { toast } from '@workspace/ui/components/sonner';
import { BadgeCheckIcon, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OnboardingForm() {
  const [step, setStep] = useState(1);

  function changeStep(newStep: number) {
    if (newStep < 1 || newStep > 2) return;

    setStep(newStep);
  }

  // switch (step) {
  //   case 1:
  //     return <Step1 onChangeStep={changeStep} />;
  //   case 2:
  //     return <Step2 />;
  //   default:
  //     return null;
  // }
  return (
    <div className={'flex items-center gap-4'}>
      <Step1 onChangeStep={changeStep} />
      <Step2 />
    </div>
  );
}

type StepProps = {
  onChangeStep: (newStep: number) => void;
};

function Step2() {
  const router = useRouter();

  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>
            1 more question.{' '}
            <strong>What&apos;s the next most important reason?</strong>
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Be my own boss</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>To do meaningful work helping others</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Be part of the worker community</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>To have more flexibility in my work life</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
      <CardFooter>
        <Button
          variant={'link'}
          size={'sm'}
          onClick={() => {
            toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
              loading: 'Completing onboarding...',
              success: 'Onboarding completed! Redirecting to login...',
              error: 'Failed to complete onboarding. Please try again.',
            });
            router.push('/login');
          }}>
          Skip
        </Button>
      </CardFooter>
    </Card>
  );
}

function Step1(props: StepProps) {
  return (
    <Card className={'max-w-lg w-full h-fit gap-4 py-4'}>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>
            Congratulations, your account has been created!
          </h2>
        </CardTitle>
        <CardDescription>
          To offer you a more personalised experience, let us know what is the
          main reason that motivates you to provide independent support work?
        </CardDescription>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Maximize my earnings</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Be my own boss</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>To do meaningful work helping others</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Be part of the worker community</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
        <Item variant='outline' size={'sm'}>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>To have more flexibility in my work life</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant='outline' size='icon-sm'>
              <ChevronRight />
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
      <CardFooter>
        <Button
          variant={'link'}
          size={'sm'}
          onClick={() => props.onChangeStep(2)}>
          Skip
        </Button>
      </CardFooter>
    </Card>
  );
}
