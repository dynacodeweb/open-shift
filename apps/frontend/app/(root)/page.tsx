'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconCircleChevronLeft,
  IconCircleChevronRight,
  IconClipboardCheck,
  IconPhoneSpark,
  IconStar,
  IconStarHalf,
  IconSubtitlesEdit,
} from '@tabler/icons-react';
import { AspectRatio } from '@workspace/ui/components/aspect-ratio';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@workspace/ui/components/carousel';
import { Checkbox } from '@workspace/ui/components/checkbox';
import CircularText from '@workspace/ui/components/extends/circular-text';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@workspace/ui/components/input-group';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import { Separator } from '@workspace/ui/components/separator';
import { cn } from '@workspace/ui/lib/utils';
import { contactSchema, ContactValues } from '@workspace/zod-schemas';
import Autoplay from 'embla-carousel-autoplay';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

const isDev = process.env.NODE_ENV === 'development';

export default function Page() {
  return (
    <main>
      <SectionHero />
      <SectionProblemOverview />
      <SectionWhoWeAre />
      <SectionHowItWorks />
      <SectionOurPartners />
      <SectionValues />
      <SectionOverview />
      <SectionCTA />
      <SectionOurTeam />
      <Carousel
        className='w-full'
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={
          isDev
            ? undefined
            : [
                Autoplay({
                  delay: 2000,
                  playOnInit: true,
                }),
              ]
        }>
        <SectionTestimonials />
      </Carousel>
      <SectionContactUs />
    </main>
  );
}

function SectionHero() {
  return (
    <section
      className={
        'h-full w-full grid grid-cols-subgrid custom-section-gradiant-1 py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'grid grid-cols-5 gap-4 h-full w-full'}>
          <div
            className={
              'col-span-full lg:col-span-3 flex flex-col items-start justify-center gap-4'
            }>
            <div>
              <Badge className={'custom-badge-bg md:py-1.5'}>
                <span className={'bg-[#146858] rounded-full p-0.5 md:p-1'}>
                  <IconStar
                    className={'size-4 fill-amber-50 stroke-amber-50'}
                  />
                </span>
                4.7(256+) Ratings
              </Badge>
            </div>
            <h1
              className={
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight space-y-3'
              }>
              <span className={'flex flex-wrap items-center gap-3'}>
                <span className={'block'}>Smarter</span>
                <span
                  className={
                    'transform -skew-x-12 bg-[#FF6B6B] w-32 h-20 hidden md:flex items-center justify-center rounded-2xl'
                  }>
                  <Image
                    src='/hero-text-img.png'
                    alt='text-img'
                    width={128}
                    height={96}
                    className={'w-full h-full skew-x-12'}
                  />
                </span>
                <span className={'block'}>Staffing</span>
              </span>
              <span className={'flex flex-wrap items-center gap-3'}>
                <span className={'block'}>for age</span>
                <span className={'block text-[#FF6B6B]'}>Care providers</span>
              </span>
            </h1>

            <p>
              The Open Services connects care facilities with qualified aged
              care workers in real time helping you stay compliant, reduce
              costs, and improve care.
            </p>

            <div className={'flex flex-wrap items-center gap-4'}>
              <Link
                href={'/login'}
                className={buttonVariants({
                  variant: 'skewed-outline',
                  className: 'rounded-sm!',
                  size: 'lg',
                })}>
                Book a Demo
              </Link>
              <Link
                href={'/sign-up'}
                className={buttonVariants({
                  variant: 'skewed',
                  className: 'rounded-sm!',
                  size: 'lg',
                })}>
                Register Your Interest
              </Link>
            </div>
          </div>
          <div className={'col-span-full lg:col-span-2'}>
            <Image
              src={'/hero-image.png'}
              alt={'Hero Image'}
              width={1500}
              height={998}
              className={'w-full h-full object-contain object-center'}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionProblemOverview() {
  return (
    <section
      className={
        'h-full w-full grid grid-cols-subgrid py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'grid grid-cols-2 gap-8 h-full w-full items-center'}>
          <div className={'col-span-full md:col-span-1'}>
            <Image
              src={'/problem-overview-img.jpg'}
              alt={'Problem Overview Image'}
              width={800}
              height={600}
              className={'w-full h-full aspect-square object-cover rounded-2xl'}
            />
          </div>
          <div className={'col-span-full md:col-span-1'}>
            <div className={'grid grid-cols-subgrid gap-4'}>
              <SectionHeadingContainer
                className={'space-y-4 md:space-y-6 lg:space-y-8'}>
                <SectionBadge>Problem Overview</SectionBadge>
                <SectionHeading
                  firstChunk={'Problem'}
                  secondChunk={'Statements'}
                />
                <p className={'text-muted-foreground'}>
                  We are dedicated to delivering exceptional healthcare services
                  with compassion and expertise. With a commitment to
                  patient-centered care, our team of healthcare professionals
                  strives to provide comprehensive medical treatments tailored
                  to individual needs.
                </p>
                <div>
                  <Link
                    href={'#'}
                    className={buttonVariants({
                      variant: 'skewed',
                      className: 'rounded-sm!',
                      size: 'lg',
                    })}>
                    Learn more
                  </Link>
                </div>
              </SectionHeadingContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionWhoWeAre() {
  return (
    <section
      className={
        'h-full w-full bg-[#F1F4FD] py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        {/* <div className={'text-center space-y-8'}> */}
        <SectionHeadingContainer
          className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionBadge>Who We Are</SectionBadge>
          <SectionHeading
            firstChunk={'About'}
            secondChunk={'The Open Services'}
          />
          <p className={'text-muted-foreground max-w-4xl mx-auto'}>
            We are dedicated to delivering exceptional healthcare services with
            compassion and expertise. With a commitment to patient-centered
            care, our team of healthcare professionals strives to provide
            comprehensive medical treatments tailored to individual needs.
          </p>
          <div className={'grid grid-cols-2 gap-6'}>
            <div className={'col-span-full lg:col-span-1'}>
              <Image
                src={'/who-we-are-1.jpg'}
                alt={'Who We Are Image 1'}
                width={600}
                height={400}
                className={
                  'w-full h-full aspect-square object-cover rounded-5xl'
                }
              />
            </div>

            <div className={'relative col-span-full lg:col-span-1'}>
              <div className='h-full w-full who-we-are-clip-path'>
                <Image
                  src={'/who-we-are-2.png'}
                  alt={'Who We Are Image 1'}
                  width={600}
                  height={400}
                  className={'w-full h-full object-cover'}
                />
              </div>
              <div
                className={
                  'absolute bottom-0 right-0 xs-1:bottom-2 xs-1:right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 lg:bottom-4 lg:right-4 rounded-4xl overflow-hidden'
                }>
                <CircularText
                  text='YEARS*OF*EXPERIENCE*'
                  onHover='slowDown'
                  spinDuration={15}
                  className='text-primary! size-24 xs:size-28 xs-1:size-36 xs-2:size-52!'
                  // className='text-primary! size-28 sm:size-48 md:size-full lg:size-44 xl:size-52 2xl:size-56'
                />
                <span
                  className={cn(
                    'absolute inset-0 flex items-center justify-center font-black text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary',
                  )}>
                  10+
                </span>
              </div>
            </div>
          </div>
          <div>
            <Link
              href={'#'}
              className={buttonVariants({
                variant: 'skewed',
                className: 'rounded-sm!',
                size: 'lg',
              })}>
              Learn more
            </Link>
          </div>
        </SectionHeadingContainer>

        {/* </div> */}
      </div>
    </section>
  );
}

const howItWorks = [
  {
    id: crypto.randomUUID(),
    title: 'Smarter Shift Matching',
    description:
      'Our AI matches shifts to qualified aged care workers based on location, skills, and availability.',
    icon: '/how-it-works/Icon-1.svg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Compliance Management',
    description:
      'Real-time visibility into staffing levels to support 24/7 RN requirements and care minute reporting.',
    icon: '/how-it-works/Icon-2.svg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Workforce Tools',
    description:
      'Built-in dashboards for shift tracking, credential management, and onboarding support.',
    icon: '/how-it-works/Icon-3.svg',
  },
];

function SectionHowItWorks() {
  return (
    <section
      className={
        'h-full w-full relative py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div
          className={
            'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16'
          }>
          {/* <div className={'space-y-8 self-end'}> */}
          <SectionHeadingContainer
            className={'self-end space-y-4 md:space-y-6 lg:space-y-8'}>
            <SectionBadge>How It Works</SectionBadge>
            <SectionHeading
              firstChunk={'Our Platform'}
              secondChunk={'Features'}
            />

            <div className={'space-y-6'}>
              {howItWorks.map((feature) => (
                <Item variant='outline' key={feature.id}>
                  <ItemMedia variant={'image'} className={'p-0!'}>
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} Icon`}
                      width={80}
                      height={80}
                      className={'size-16! mt-3! object-cover'}
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className={'text-primary font-medium'}>
                      {feature.title}
                    </ItemTitle>
                    <ItemDescription>{feature.description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </div>
          </SectionHeadingContainer>

          {/* </div> */}

          <div
            className={
              'aspect-square h-full w-full relative bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_53.33%,_#F3D8DD_95.06%)] rounded-4xl'
            }>
            <div className='hidden lg:block absolute top-52 translate-y-6/12 -left-12 bg-white p-6 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl'>
              <Image
                src={'/how-it-works/Icon-4.svg'}
                alt={'How It Works shield icon'}
                width={64}
                height={64}
                className={'w-full h-full object-contain'}
              />
            </div>
            <Image
              src={'/how-it-works.png'}
              alt={'How It Works Image'}
              width={2000}
              height={3000}
              className={'w-full h-full object-contain'}
            />
            <Image
              src={'/how-it-works-shape.svg'}
              alt={'How It Works Overlay Image'}
              width={149}
              height={149}
              className={
                'hidden md:block size-28 object-contain absolute -bottom-14 left-0 translate-x-72'
              }
            />
            <Image
              src={'/icon-dot.svg'}
              alt={'How It Works Overlay dot'}
              width={33}
              height={33}
              className={
                'hidden md:block size-12 object-contain absolute top-36 right-0 -translate-x-32'
              }
            />
          </div>
        </div>
      </div>
      <Image
        src={'/ellipse-bottom-left.svg'}
        alt={'Ellipse Bottom Left'}
        width={400}
        height={400}
        className={'absolute bottom-0 left-0 -z-10'}
      />
    </section>
  );
}

const partners = [
  {
    name: 'Partner 1',
    logo: '/partners/Icon-1.svg',
  },
  {
    name: 'Partner 2',
    logo: '/partners/Icon-2.svg',
  },
  {
    name: 'Partner 3',
    logo: '/partners/Icon-3.svg',
  },
  {
    name: 'Partner 4',
    logo: '/partners/Icon-4.svg',
  },
  {
    name: 'Partner 5',
    logo: '/partners/Icon-5.svg',
  },
  {
    name: 'Partner 6',
    logo: '/partners/Icon-6.svg',
  },
  {
    name: 'Partner 7',
    logo: '/partners/Icon-7.svg',
  },
];

function SectionOurPartners() {
  const reversed = [...partners].reverse();
  const doubledPartners = [...partners, ...reversed, ...partners, ...reversed];

  return (
    <section className={'h-full w-full py-20 md:py-24 lg:py-28 px-4 2xl:px-0'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        {/* <div className={'text-center space-y-8'}> */}
        <SectionHeadingContainer
          className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionBadge>Our Partners</SectionBadge>
          <SectionHeading
            firstChunk={'Trusted by'}
            secondChunk={'Families and Patients'}
          />
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={
              isDev
                ? undefined
                : [
                    Autoplay({
                      delay: 2000,
                      playOnInit: true,
                    }),
                  ]
            }>
            <CarouselContent>
              {doubledPartners.map((partner, idx) => (
                <CarouselItem
                  key={idx}
                  className='basis-1/3 sm:basis-1/4 lg:basis-1/6'>
                  <div className='p-1'>
                    <Card
                      className={
                        'p-0 shadow-none bg-transparent rounded-none border-none'
                      }>
                      <CardContent className='aspect-video p-0 relative'>
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          // width={160}
                          // height={36}
                          fill
                          // className={'w-auto h-9 object-contain'}
                          className={'w-full h-full object-contain'}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SectionHeadingContainer>
        {/* </div> */}
      </div>
    </section>
  );
}

function SectionValues() {
  return (
    <section
      className={
        'h-full w-full relative py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        {/* <div className={'text-center space-y-8'}> */}
        <SectionHeadingContainer
          className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionBadge>Values</SectionBadge>
          <SectionHeading firstChunk={'Value'} secondChunk={'Proposition'} />
          <p>
            OpenServices is designed to align with Australia’s aged care
            regulations, including:
          </p>
          <div className={'max-w-3xl mx-auto space-y-8'}>
            <div className={'space-y-11 h-full relative'}>
              <Item variant='success' size={'lg'}>
                <ItemActions
                  className={
                    'ring-1 ring-green-500 rounded-lg bg-background p-1'
                  }>
                  <IconSubtitlesEdit className='size-8' />
                </ItemActions>
                <ItemContent>
                  <ItemTitle>Care Support</ItemTitle>
                  <ItemDescription className={'text-start'}>
                    200 care minutes per resident, per day
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Separator
                orientation='vertical'
                className={
                  'max-h-24 absolute -translate-x-1/2 -translate-y-1/2 left-11 top-[115px] border-dashed border-1 border-green-300'
                }
                decorative
              />

              <Item variant='success' size={'lg'}>
                <ItemActions
                  className={
                    'ring-1 ring-green-500 rounded-lg bg-background p-1'
                  }>
                  <IconPhoneSpark className='size-8' />
                </ItemActions>
                <ItemContent>
                  <ItemTitle>Customer Support</ItemTitle>
                  <ItemDescription className={'text-start'}>
                    24/7 RN coverage
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Separator
                orientation='vertical'
                className={
                  'max-h-24 absolute -translate-x-1/2 -translate-y-1/2 left-11 -bottom-6 border-dashed border-1 border-green-300'
                }
                decorative
              />
              <Separator orientation='vertical' />
              <Item variant='success' size={'lg'}>
                <ItemActions
                  className={
                    'ring-1 ring-green-500 rounded-lg bg-background p-1'
                  }>
                  <IconClipboardCheck className='size-8' />
                </ItemActions>
                <ItemContent>
                  <ItemTitle>Compliance</ItemTitle>
                  <ItemDescription className={'text-start'}>
                    Quarterly workforce reporting compliance
                  </ItemDescription>
                </ItemContent>
              </Item>
            </div>
            <p className={'text-muted-foreground text-sm'}>
              Compliant with the Aged Care Quality and Safety Commission Built
              for Australian providers under the Aged Care Act 1997
            </p>
          </div>
        </SectionHeadingContainer>

        {/* </div> */}
      </div>
      <Image
        src={'/ellipse-bottom-left.svg'}
        alt={'Ellipse Bottom Left'}
        width={400}
        height={400}
        className={'absolute bottom-0 left-0 -z-10'}
      />
    </section>
  );
}

function SectionOverview() {
  return (
    <section
      className={
        'h-full w-full bg-[#F1F4FD] py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center'}>
          <div className={'max-w-5xl mx-auto'}>
            <SectionHeadingContainer
              className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
              <SectionBadge>Problem Overview</SectionBadge>
              <SectionHeading
                firstChunk={'Flexible Work for Aged Care'}
                secondChunk={'Professionals Statements'}
              />
              <div className={'grid grid-cols-2 gap-8'}>
                <div className={'col-span-full lg:col-span-1'}>
                  <Image
                    src={'/cta-img.jpg'}
                    alt={'CTA Image'}
                    width={600}
                    height={400}
                    className={'w-full h-full object-cover rounded-2xl'}
                  />
                </div>

                <div className={'col-span-full lg:col-span-1 content-center'}>
                  <div
                    className={
                      'grid grid-cols-subgrid gap-6 lg:gap-8 content-center'
                    }>
                    <p className={'text-sm text-start text-muted-foreground'}>
                      Pick shifts that suit your availability. No rosters, no
                      long-term commitments. Register once, and get matched with
                      shifts in your area—based on your qualifications and
                      preferences. Transparent pay rates and flexible
                      scheduling.
                    </p>

                    <div className={'text-start'}>
                      <Link
                        href={'#'}
                        className={buttonVariants({
                          variant: 'skewed',
                          className: 'rounded-sm!',
                          size: 'lg',
                        })}>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SectionHeadingContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCTA() {
  return (
    <section className={'h-full w-full relative py-20 md:py-24 lg:py-28'}>
      <Image
        src={'/ellipse-or-tr.svg'}
        alt={'Ellipse orange Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div
          className={'max-w-5xl mx-auto bg-[#F1F4FD] cta-card-clip-path py-8'}>
          {/* <div className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}> */}
          <SectionHeadingContainer
            className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
            <SectionBadge>Our Community</SectionBadge>
            <SectionHeading firstChunk={'Care '} secondChunk={'Facility?'} />
            <p>
              Trusted by aged care providers across Australia &mdash; Built for
              the Australian sector.
            </p>

            <div className={''}>
              <Link
                href={'#'}
                className={buttonVariants({
                  variant: 'skewed',
                  className: 'rounded-sm!',
                  size: 'lg',
                })}>
                Book a Demo
              </Link>
            </div>
          </SectionHeadingContainer>
          {/* </div> */}
        </div>
      </div>
      <Image
        src={'/ellipse-or-bl.svg'}
        alt={'Ellipse orange Bottom Left'}
        width={400}
        height={400}
        className={'absolute bottom-0 left-0 -z-10'}
      />
    </section>
  );
}

const teams = [
  {
    id: crypto.randomUUID(),
    name: 'Lily Anderson',
    role: 'Nursing Specialist',
    image: '/team-1.png',
    socialLink: '#',
    socialIcon: IconBrandLinkedin,
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Martinez',
    role: 'Palliative Care',
    image: '/team-2.png',
    socialLink: '#',
    socialIcon: IconBrandLinkedin,
  },
  {
    id: crypto.randomUUID(),
    name: 'Emily Carter',
    role: 'Care Coordinator',
    image: '/team-3.png',
    socialLink: '#',
    socialIcon: IconBrandLinkedin,
  },
];

function SectionOurTeam() {
  return (
    <section
      className={
        'h-full w-full relative py-20 md:py-24 lg:py-28 px-4 2xl:px-0'
      }>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />

      <div className={'container max-w-[85em] mx-auto w-full'}>
        {/* <div className={'text-center space-y-8'}> */}
        <SectionHeadingContainer
          className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionBadge>Our Team</SectionBadge>
          <SectionHeading
            firstChunk={'Meet our dedicated '}
            secondChunk={'team'}
          />
          <p>
            Meet the caring individuals who bring comfort, kindness, and
            expertise to every patient we serve.
          </p>

          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
            {teams.map((team) => (
              <div className={'relative'} key={team.id}>
                <div className={'team-card-clip-path bg-accent'}>
                  <Card
                    className={
                      'w-full h-full bg-transparent shadow-none border-none rounded-none'
                    }>
                    <CardContent>
                      <AspectRatio
                        ratio={16 / 9}
                        className='rounded-lg overflow-hidden'>
                        <Image
                          src={team.image}
                          alt={team.name}
                          width={400}
                          height={400}
                          className={'w-full h-full object-cover object-top'}
                        />
                      </AspectRatio>
                    </CardContent>
                    <CardHeader className={'text-start'}>
                      <CardTitle>
                        <h3>{team.name}</h3>
                      </CardTitle>
                      <CardDescription>
                        <p>{team.role}</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <CardAction className={'absolute bottom-2 right-4'}>
                  <Link href={team.socialLink as Route} target='_blank'>
                    <IconBrandLinkedinFilled className='size-8 fill-primary' />
                  </Link>
                </CardAction>
              </div>
            ))}
          </div>

          <div className={''}>
            <Link
              href={'#'}
              className={buttonVariants({
                variant: 'skewed',
                className: 'rounded-sm!',
                size: 'lg',
              })}>
              Make an Inquiry
            </Link>
          </div>
        </SectionHeadingContainer>
        {/* </div> */}
      </div>
      <Image
        src={'/ellipse-bottom-left.svg'}
        alt={'Ellipse Bottom Left'}
        width={400}
        height={400}
        className={'absolute bottom-0 left-0 -z-10'}
      />
    </section>
  );
}

const testimonials = [
  {
    id: crypto.randomUUID(),
    name: 'Olivia Hernandez',
    role: 'Heart patient',
    image: '/client-1.png',
    testimonial:
      'The care I received was exceptional and truly holistic. The team’s dedication greatly improved my well-being.',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Billy Vasquez',
    role: 'Exceptional Care',
    image: '/client-2.png',
    testimonial:
      'Their holistic approach and constant encouragement made a meaningful difference throughout my recovery journey.',
    rating: 4.8,
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Hernandez',
    role: 'Heart patient',
    image: '/client-1.png',
    testimonial:
      'The care I received was exceptional and truly holistic. The team’s dedication greatly improved my well-being.',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Billy Vasquez',
    role: 'Exceptional Care',
    image: '/client-2.png',
    testimonial:
      'Their holistic approach and constant encouragement made a meaningful difference throughout my recovery journey.',
    rating: 4.8,
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Hernandez',
    role: 'Heart patient',
    image: '/client-1.png',
    testimonial:
      'The care I received was exceptional and truly holistic. The team’s dedication greatly improved my well-being.',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Billy Vasquez',
    role: 'Exceptional Care',
    image: '/client-2.png',
    testimonial:
      'Their holistic approach and constant encouragement made a meaningful difference throughout my recovery journey.',
    rating: 4.8,
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Hernandez',
    role: 'Heart patient',
    image: '/client-1.png',
    testimonial:
      'The care I received was exceptional and truly holistic. The team’s dedication greatly improved my well-being.',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Billy Vasquez',
    role: 'Exceptional Care',
    image: '/client-2.png',
    testimonial:
      'Their holistic approach and constant encouragement made a meaningful difference throughout my recovery journey.',
    rating: 4.8,
  },
];

function SectionTestimonials() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <section className={'h-full w-full py-20 md:py-24 lg:py-28 px-4 2xl:px-0'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'space-y-8'}>
          <div className={'flex items-center justify-between'}>
            <SectionHeadingContainer
              className={'space-y-4 md:space-y-6 lg:space-y-8'}>
              <SectionBadge>Testimonials</SectionBadge>
              <SectionHeading
                firstChunk={'What our'}
                secondChunk={'clients say'}
              />
            </SectionHeadingContainer>

            <div className={'self-end flex items-center gap-2'}>
              <Button
                type='button'
                variant={'outline'}
                size={'icon-sm'}
                className='rounded-full!'
                onClick={scrollPrev}>
                <IconCircleChevronLeft className={'size-5'} />
              </Button>
              <Button
                type='button'
                variant={'outline'}
                size={'icon-sm'}
                className='rounded-full!'
                onClick={scrollNext}>
                <IconCircleChevronRight className={'size-5'} />
              </Button>
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className='basis-1/1 md:basis-1/3 lg:basis-1/4'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='space-y-2'>
                      <div className={'flex items-center gap-1'}>
                        <IconStar className={'size-4 stroke-amber-400'} />
                        <IconStar className={'size-4 stroke-amber-400'} />
                        <IconStar className={'size-4 stroke-amber-400'} />
                        <IconStar className={'size-4 stroke-amber-400'} />
                        <IconStarHalf className={'size-4 stroke-amber-400'} />
                      </div>
                      <p className={'text-muted-foreground text-sm'}>
                        {testimonial.testimonial}
                      </p>
                    </CardContent>
                    <CardHeader>
                      <div className={'flex items-center gap-4'}>
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <CardTitle>
                            <h4>{testimonial.name}</h4>
                          </CardTitle>
                          <CardDescription>{testimonial.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </div>
    </section>
  );
}

function SectionContactUs() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicy: false,
    },
  });

  const remainingLength = useWatch({
    name: 'message',
    control: form.control,
    // maximum length is 1000 characters, so we can calculate the remaining characters
    compute: (value) => 1000 - (value ? value.length : 0),
  });

  const onError: SubmitErrorHandler<ContactValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<ContactValues> = (values) => {
    console.log('Form submitted successfully:', values);
    // You can add your form submission logic here, such as sending the data to an API or displaying a success message.
  };

  return (
    <section className={'h-full w-full pb-20 md:pb-24 lg:pb-28 px-4 2xl:px-0'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        {/* <div className={'text-center space-y-8'}> */}
        <SectionHeadingContainer
          className={'text-center space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionBadge>Contact Us</SectionBadge>
          <SectionHeading
            firstChunk={'Do you have'}
            secondChunk={'question for us?'}
          />

          <div className={'grid grid-cols-2 gap-6'}>
            <div className='col-span-full lg:col-span-1 self-center'>
              <Image
                src={'/contact-us.png'}
                alt={'Contact Us Image'}
                width={800}
                height={600}
                className={
                  'w-full h-full aspect-square object-cover rounded-2xl'
                }
              />
            </div>

            <div className={'col-span-full lg:col-span-1 content-center'}>
              <Card className='w-full h-fit contact-form-border'>
                <CardContent>
                  <form
                    onSubmit={form.handleSubmit(onSubmit, onError)}
                    className={'w-full text-start'}>
                    <FieldSet className={'gap-3'}>
                      <FieldLegend className={'sr-only'}>
                        Contact form
                      </FieldLegend>

                      <FieldGroup className={'gap-4'}>
                        <FieldGroup
                          className={'grid grid-cols-1 md:grid-cols-2 gap-2'}>
                          <Controller
                            name='name'
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor='name'>Name</FieldLabel>
                                <Input
                                  id='name'
                                  placeholder='Evil Rabbit'
                                  {...field}
                                  aria-invalid={fieldState.invalid}
                                />
                                {fieldState.error && (
                                  <FieldError
                                    role='alert'
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
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <Input
                                  id='email'
                                  placeholder='someone@example.com'
                                  {...field}
                                  aria-invalid={fieldState.invalid}
                                />
                                {fieldState.error && (
                                  <FieldError
                                    role='alert'
                                    errors={[fieldState.error]}
                                  />
                                )}
                              </Field>
                            )}
                          />
                        </FieldGroup>

                        <Controller
                          name='phone'
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field
                              data-invalid={fieldState.invalid}
                              aria-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor='phone'>Phone no</FieldLabel>
                              <Input
                                id='phone'
                                type='tel'
                                placeholder='+1 (555) 987-6543'
                                {...field}
                                aria-invalid={fieldState.invalid}
                              />
                              {fieldState.error ? (
                                <FieldError
                                  role='alert'
                                  errors={[fieldState.error]}
                                />
                              ) : (
                                <FieldDescription className={'text-start'}>
                                  Enter your 10-digit phone number
                                </FieldDescription>
                              )}
                            </Field>
                          )}
                        />

                        <Controller
                          name='message'
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field
                              data-invalid={fieldState.invalid}
                              aria-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor='message'>Message</FieldLabel>
                              <InputGroup>
                                <InputGroupTextarea
                                  id='message'
                                  placeholder='Enter your message'
                                  className='resize-none min-h-[120px]'
                                  {...field}
                                  aria-invalid={fieldState.invalid}
                                />
                                <InputGroupAddon align='block-end'>
                                  <InputGroupText className='text-muted-foreground text-xs'>
                                    {remainingLength} characters left
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              {fieldState.error && (
                                <FieldError
                                  role='alert'
                                  errors={[fieldState.error]}
                                />
                              )}
                            </Field>
                          )}
                        />
                      </FieldGroup>

                      <FieldGroup>
                        <Controller
                          name='privacyPolicy'
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field orientation='horizontal'>
                              <Checkbox
                                id='terms-and-conditions'
                                checked={field.value}
                                onCheckedChange={(checked) =>
                                  field.onChange(checked === true)
                                }
                                data-invalid={fieldState.invalid}
                                aria-invalid={fieldState.invalid}
                              />

                              <FieldLabel
                                htmlFor='terms-and-conditions'
                                className='font-normal text-start flex flex-wrap items-center gap-1 md:gap-2'>
                                {fieldState.error ? (
                                  <FieldError
                                    role='alert'
                                    errors={[fieldState.error]}
                                  />
                                ) : (
                                  <>
                                    <span>
                                      By submitting this form, you agree to our
                                      friendly,
                                    </span>{' '}
                                    <Link
                                      href='#'
                                      className={buttonVariants({
                                        variant: 'link',
                                        className: 'p-0! h-fit! capitalize',
                                      })}>
                                      privacy policy
                                    </Link>
                                  </>
                                )}
                              </FieldLabel>
                            </Field>
                          )}
                        />
                      </FieldGroup>

                      <Field orientation='horizontal'>
                        <Button
                          variant={'skewed'}
                          size={'lg'}
                          type='submit'
                          className={'w-full'}>
                          Submit
                        </Button>
                      </Field>
                    </FieldSet>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionHeadingContainer>

        {/* </div> */}
      </div>
    </section>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      className={
        'custom-gradiant-1 custom-badge-text text-xs! md:text-base! md:px-3! md:py-1.5'
      }>
      {children}
    </Badge>
  );
}

type SectionHeadingsContainerProps = React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    // You can add any additional props you want to pass to the container here
  };

function SectionHeadingContainer({
  children,
  className,
}: SectionHeadingsContainerProps) {
  return <div className={className}>{children}</div>;
}

function SectionHeading({
  firstChunk,
  secondChunk,
}: {
  firstChunk: string;
  secondChunk: string;
}) {
  return (
    <h2
      className={
        'scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight first:mt-0'
      }>
      <span className={'text-primary'}>{firstChunk}</span>{' '}
      <span className={'text-destructive'}>{secondChunk}</span>
    </h2>
  );
}
