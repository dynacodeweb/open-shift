import { IconCheckbox } from '@tabler/icons-react';
import { buttonVariants } from '@workspace/ui/components/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@workspace/ui/components/carousel';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import { AlertCircleIcon, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <Card className={'bg-transparent shadow-none p-0 border-0'}>
      <div className='p-8 space-x-6'>
        <div className='inline-block rotate-6 -skew-6 rounded-xs bg-indigo-500'>
          <button className='-rotate-6 skew-6 rounded-xs px-6 py-2 text-white'>
            Sign in
          </button>
        </div>

        <button className='rotate-6 -skew-6 rounded-xs ring-1 ring-indigo-500 px-6 py-2 text-indigo-600'>
          Sign in
        </button>
      </div>
      <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4'}>
        <Card className={'col-span-2 bg-transparent shadow-none p-0 border-0'}>
          <CardHeader>
            <CardTitle>
              <h1 className={'text-4xl font-bold'}>Dashboard</h1>
            </CardTitle>
            <CardDescription>Welcome Mark</CardDescription>
            <CardDescription>
              Let’s get you started to find jobs and build a network of clients
              as soon as possible.
            </CardDescription>
            <CardDescription>
              First, we need to know a few things about you and go through some
              checks to approve your account with Mable.
            </CardDescription>
          </CardHeader>
          <CardContent className={'space-y-6'}>
            <CardAction className={'self-start justify-self-start'}>
              <Link
                href={'#'}
                className={buttonVariants({ variant: 'default' })}>
                Setup your account
              </Link>
            </CardAction>
            <Item variant='destructive'>
              <ItemMedia variant={'destructive'}>
                <AlertCircleIcon className='size-5' />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Open Service direct</ItemTitle>
                <ItemDescription>
                  Supplies you need direct to your home.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    variant: 'destructive',
                    size: 'sm',
                  })}>
                  View
                </Link>
              </ItemActions>
            </Item>
          </CardContent>

          <CardContent>
            <ClientReviews />
            {/* <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
              <div className='bg-muted/50 aspect-video rounded-xl' />
              <div className='bg-muted/50 aspect-video rounded-xl' />
              <div className='bg-muted/50 aspect-video rounded-xl' />
            </div> */}
          </CardContent>
        </Card>
        <Card className={'col-span-1 h-fit bg-destructive/10'}>
          <CardHeader>
            <CardTitle className={'text-2xl font-bold'}>
              What you’ll need to set up your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={'space-y-3 text-muted-foreground text-sm'}>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-4'} />
                Your mobile number
              </li>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-4'} />
                NDIS Worker Screening Check
              </li>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-4'} />
                Australian Business Number (ABN)
              </li>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-4'} />
                Two professional references
              </li>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-4'} />
                COVID-19 vaccination as required by your state
              </li>
              <li className={'flex items-center gap-2'}>
                <IconCheckbox className={'size-6'} />
                Working with Children Check, if working with children and
                teenagers under 18 years old
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <CardFooter>
        <CardDescription>
          <small>
            The Open Service collects your personal information for the purpose
            of verifying you in accordance with the Verification Policy. See
            <Link
              href={'#'}
              className={buttonVariants({
                variant: 'link',
                className: 'p-0! h-fit! text-[11px] mx-1 gap-1!',
              })}>
              Privacy Collection Notice and Policy
              <SquareArrowOutUpRight className={'size-2.5'} />
            </Link>
            for more information. While we verify information in the manner set
            out in our Verification Policy, clients or support workers may
            provide you with other information about themselves which we do not
            verify, such as in their profiles, messages or verbally. You can
            request that your client or support worker provides you with
            credentials or identifying documents when you first meet them.
          </small>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

const clientReviews = [
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
  {
    id: crypto.randomUUID(),
    content:
      '‘Biggest thing with Mable is that it provides flexibility. You’re able to tailor your hours whenever you need.’',
    name: 'Jane Doe',
    avatar: '/profile-dummy.png',
  },
];

function ClientReviews() {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {clientReviews.map((review) => (
          <CarouselItem key={review.id} className='md:basis-1/2 lg:basis-1/3'>
            <Card className={'gap-4'}>
              <CardContent className='flex flex-col aspect-auto items-center justify-center'>
                <CardDescription>{review.content}</CardDescription>
              </CardContent>
              <CardFooter className={'space-x-4'}>
                <div className={'size-10'}>
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={50}
                    height={50}
                    className={'w-full h-full object-cover rounded-full'}
                  />
                </div>
                <strong>{review.name}</strong>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
