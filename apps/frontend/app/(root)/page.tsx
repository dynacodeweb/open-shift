import {
  IconBrandLinkedin,
  IconCircleChevronLeft,
  IconCircleChevronRight,
  IconClipboardCheck,
  IconPhoneSpark,
  IconPlayerPlay,
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
} from '@workspace/ui/components/carousel';
import { Checkbox } from '@workspace/ui/components/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@workspace/ui/components/field';
import { Input } from '@workspace/ui/components/input';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@workspace/ui/components/item';
import { Separator } from '@workspace/ui/components/separator';
import { Textarea } from '@workspace/ui/components/textarea';
import { BadgeCheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={'px-4 2xl:px-0'}>
      <SectionHero />
      <SectionProblemOverview />
      <SectionWhoWeAre />
      <SectionHowItWorks />
      <SectionOurPartners />
      <SectionValues />
      <SectionOverview />
      <SectionCTA />
      <SectionOurTeam />
      <SectionTestimonials />
      <SectionContactUs />
    </main>
  );
}

function SectionHero() {
  return (
    <section
      className={
        'h-dvh w-full grid grid-cols-subgrid custom-section-gradiant-1'
      }>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'grid grid-cols-5 gap-4 h-full w-full'}>
          <div
            className={
              'col-span-3 flex flex-col items-start justify-center gap-4'
            }>
            <div>
              <Badge className={'custom-badge-bg py-1.5'}>
                <span className={'bg-[#146858] rounded-full p-1'}>
                  <IconStar
                    className={'size-4 fill-amber-50 stroke-amber-50'}
                  />
                </span>
                4.7(256+) Ratings
              </Badge>
            </div>
            <h1 className={'text-7xl font-bold leading-tight space-y-3'}>
              <span className={'flex items-center gap-3'}>
                <span className={'block'}>Smarter</span>
                <span
                  className={
                    'transform -skew-x-12 bg-[#FF6B6B] w-32 h-20 flex items-center justify-center rounded-2xl'
                  }>
                  <Image
                    src='/hero-text-img.png'
                    alt='text-img'
                    width={128}
                    height={96}
                    className={'w-full h-full'}
                  />
                </span>
                <span className={'block'}>Staffing</span>
              </span>
              <span className={'flex items-center gap-3'}>
                <span className={'block'}>for age</span>
                <span className={'block text-[#FF6B6B]'}>Care providers</span>
              </span>
            </h1>

            <p>
              The Open Services connects care facilities with qualified aged
              care workers in real time helping you stay compliant, reduce
              costs, and improve care.
            </p>

            <div className={'flex items-center gap-4'}>
              <Link
                href={'#'}
                className={buttonVariants({
                  variant: 'skewed-outline',
                  className: 'rounded-sm!',
                  size: 'lg',
                })}>
                Book a Demo
              </Link>
              <Link
                href={'#'}
                className={buttonVariants({
                  variant: 'skewed',
                  className: 'rounded-sm!',
                  size: 'lg',
                })}>
                Register Your Interest
              </Link>
            </div>
          </div>
          <div className={'col-span-2'}>
            <Image
              src={'/hero-image.png'}
              alt={'Hero Image'}
              width={1500}
              height={998}
              className={'w-full h-full object-contain'}
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
    <section className={'h-dvh w-full grid grid-cols-subgrid'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'grid grid-cols-2 gap-8 h-full w-full items-center'}>
          <div>
            <Image
              src={'/problem-overview-img.jpg'}
              alt={'Problem Overview Image'}
              width={800}
              height={600}
              className={'w-full h-full object-contain rounded-2xl'}
            />
          </div>
          <div className={'grid grid-cols-subgrid gap-4'}>
            <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
              Problem Overview
            </Badge>
            <SectionHeading firstChunk={'Problem'} secondChunk={'Statements'} />
            <p className={'text-muted-foreground'}>
              We are dedicated to delivering exceptional healthcare services
              with compassion and expertise. With a commitment to
              patient-centered care, our team of healthcare professionals
              strives to provide comprehensive medical treatments tailored to
              individual needs.
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
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionWhoWeAre() {
  return (
    <section className={'h-full w-full bg-[#F1F4FD] py-24'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center space-y-8'}>
          <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
            Who We Are
          </Badge>
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

          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
            <div>
              <Image
                src={'/who-we-are-1.jpg'}
                alt={'Who We Are Image 1'}
                width={600}
                height={400}
                className={'w-full h-full object-cover rounded-5xl'}
              />
            </div>

            <div
              className='h-full w-full'
              style={{
                clipPath:
                  'polygon( 0% 5.911%,0% 5.911%,0.085% 4.952%,0.332% 4.043%,0.726% 3.195%,1.255% 2.42%,1.905% 1.731%,2.663% 1.141%,3.515% 0.66%,4.448% 0.301%,5.449% 0.077%,6.504% 0%,93.496% 0%,93.496% 0%,94.551% 0.077%,95.552% 0.301%,96.485% 0.66%,97.337% 1.141%,98.095% 1.731%,98.745% 2.42%,99.274% 3.195%,99.668% 4.043%,99.915% 4.952%,100% 5.911%,100% 58.374%,100% 58.374%,99.915% 59.333%,99.668% 60.243%,99.274% 61.091%,98.745% 61.866%,98.095% 62.554%,97.337% 63.145%,96.485% 63.626%,95.552% 63.984%,94.551% 64.208%,93.496% 64.286%,67.615% 64.286%,67.615% 64.286%,66.56% 64.363%,65.559% 64.587%,64.626% 64.946%,63.774% 65.426%,63.016% 66.017%,62.366% 66.706%,61.837% 67.48%,61.443% 68.329%,61.196% 69.238%,61.111% 70.197%,61.111% 94.089%,61.111% 94.089%,61.026% 95.048%,60.78% 95.957%,60.385% 96.805%,59.856% 97.58%,59.206% 98.269%,58.448% 98.859%,57.596% 99.34%,56.663% 99.699%,55.662% 99.923%,54.607% 100%,6.504% 100%,6.504% 100%,5.449% 99.923%,4.448% 99.699%,3.515% 99.34%,2.663% 98.859%,1.905% 98.269%,1.255% 97.58%,0.726% 96.805%,0.332% 95.957%,0.085% 95.048%,0% 94.089%,0% 5.911% )',
              }}>
              <Image
                src={'/who-we-are-2.png'}
                alt={'Who We Are Image 1'}
                width={600}
                height={400}
                className={'w-full h-full object-cover'}
              />
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
        </div>
      </div>
    </section>
  );
}

function SectionHowItWorks() {
  return (
    <section className={'h-full w-full py-24 relative'}>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-16'}>
          <div className={'space-y-8 self-end'}>
            <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
              How It Works
            </Badge>
            <SectionHeading
              firstChunk={'Our Platform'}
              secondChunk={'Features'}
            />

            <div className={'space-y-6'}>
              <Item variant='outline'>
                <ItemMedia variant={'icon'}>
                  <BadgeCheckIcon className='size-10' />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Smarter Shift Matching</ItemTitle>
                  <ItemDescription>
                    Our AI matches shifts to qualified aged care workers based
                    on location, skills, and availability,
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item variant='outline'>
                <ItemMedia variant={'icon'}>
                  <BadgeCheckIcon className='size-10' />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Compliance Management</ItemTitle>
                  <ItemDescription>
                    Real-time visibility into staffing levels to support 24/7 RN
                    requirements and care minute reporting.
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item variant='outline'>
                <ItemMedia variant={'icon'}>
                  <BadgeCheckIcon className='size-10' />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Workforce Tools</ItemTitle>
                  <ItemDescription>
                    Built-in dashboards for shift tracking, credential
                    management, and onboarding support.
                  </ItemDescription>
                </ItemContent>
              </Item>
            </div>
          </div>

          <div
            className={
              'aspect-square h-full w-full relative bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_53.33%,_#F3D8DD_95.06%)] rounded-4xl'
            }>
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
                'size-28 object-contain absolute -bottom-14 left-0 translate-x-72'
              }
            />
            <Image
              src={'/icon-dot.svg'}
              alt={'How It Works Overlay dot'}
              width={33}
              height={33}
              className={
                'size-12 object-contain absolute top-36 right-0 -translate-x-32'
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

function SectionOurPartners() {
  return (
    <section className={'h-full w-full py-24'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center space-y-8'}>
          <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
            Our Partners
          </Badge>
          <SectionHeading
            firstChunk={'Trusted by'}
            secondChunk={'Families and Patients'}
          />
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
            }}>
            <CarouselContent>
              {Array.from({ length: 50 }).map((_, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/6'>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-40/9 items-center justify-center p-6'>
                        <span className='text-4xl font-semibold'>
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function SectionValues() {
  return (
    <section className={'h-full w-full py-24 relative'}>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center space-y-8'}>
          <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
            Values
          </Badge>
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

function SectionOverview() {
  return (
    <section className={'h-full w-full py-24 bg-[#F1F4FD]'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center'}>
          <div className={'max-w-5xl mx-auto space-y-8'}>
            <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
              Problem Overview
            </Badge>
            <SectionHeading
              firstChunk={'Flexible Work for Aged Care'}
              secondChunk={'Professionals Statements'}
            />

            <div className={'grid grid-cols-2 gap-8'}>
              <div>
                <Image
                  src={'/cta-img.jpg'}
                  alt={'CTA Image'}
                  width={600}
                  height={400}
                  className={'w-full h-full object-cover rounded-2xl'}
                />
              </div>
              <div className={'grid grid-cols-subgrid gap-8 content-center'}>
                <p className={'text-sm text-start text-muted-foreground'}>
                  Pick shifts that suit your availability. No rosters, no
                  long-term commitments. Register once, and get matched with
                  shifts in your area—based on your qualifications and
                  preferences. Transparent pay rates and flexible scheduling.
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
        </div>
      </div>
    </section>
  );
}

function SectionCTA() {
  return (
    <section className={'h-full w-full py-24 relative'}>
      <Image
        src={'/ellipse-or-tr.svg'}
        alt={'Ellipse orange Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'max-w-5xl mx-auto bg-[#F1F4FD] py-8'}>
          <div className={'text-center space-y-8'}>
            <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
              Our Community
            </Badge>
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
          </div>
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
    <section className={'h-full w-full py-24 relative'}>
      <Image
        src={'/ellipse-top-right.svg'}
        alt={'Ellipse Top Right'}
        width={400}
        height={400}
        className={'absolute top-0 right-0 -z-10'}
      />
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center space-y-8'}>
          <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
            Our Team
          </Badge>
          <SectionHeading firstChunk={'Care '} secondChunk={'Facility?'} />
          <p>
            Meet the caring individuals who bring comfort, kindness, and
            expertise to every patient we serve.
          </p>

          <div className={'grid grid-cols-3 gap-4'}>
            {teams.map((team) => (
              <Card key={team.id}>
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
                  <CardAction>
                    <Link href={team.socialLink} target='_blank'>
                      <team.socialIcon className='size-full text-primary' />
                    </Link>
                  </CardAction>
                </CardHeader>
              </Card>
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
              Make an Inquirey
            </Link>
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
  return (
    <section className={'h-full w-full py-24'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'space-y-8'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
                Testimonials
              </Badge>
              <SectionHeading
                firstChunk={'What our'}
                secondChunk={'clients say'}
              />
            </div>

            <div className={'self-end flex items-center gap-2'}>
              <Button
                variant={'outline'}
                size={'icon-sm'}
                className='rounded-full!'>
                <IconCircleChevronLeft className={'size-5'} />
              </Button>
              <Button
                variant={'outline'}
                size={'icon-sm'}
                className='rounded-full!'>
                <IconCircleChevronRight className={'size-5'} />
              </Button>
            </div>
          </div>

          <div className={'grid grid-cols-5 gap-4'}>
            <div className={'col-span-4 self-center'}>
              <Carousel className='w-full'>
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.id}
                      className='basis-1/2 lg:basis-1/3'>
                      <div className='p-1'>
                        <Card>
                          <CardContent className='space-y-2'>
                            <div className={'flex items-center gap-1'}>
                              <IconStar className={'size-4 stroke-amber-400'} />
                              <IconStar className={'size-4 stroke-amber-400'} />
                              <IconStar className={'size-4 stroke-amber-400'} />
                              <IconStar className={'size-4 stroke-amber-400'} />
                              <IconStarHalf
                                className={'size-4 stroke-amber-400'}
                              />
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
                                  alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>

                              <div>
                                <CardTitle>
                                  <h4>{testimonial.name}</h4>
                                </CardTitle>
                                <CardDescription>
                                  {testimonial.role}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className={'col-span-1'}>
              <Card
                className={
                  'relative bg-transparent aspect-square w-full h-full'
                }>
                <CardAction className={'self-end px-4'}>
                  <TestimonialVideo />
                </CardAction>

                <Image
                  src='/testimonials-video-bg.png'
                  alt='Testimonials Video Background'
                  fill
                  className='h-full w-full rounded-lg object-cover brightness-[0.6] -z-10'
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionContactUs() {
  return (
    <section className={'h-full w-full py-24'}>
      <div className={'container max-w-[85em] mx-auto w-full'}>
        <div className={'text-center space-y-8'}>
          <Badge className={'custom-gradiant-1 custom-badge-text py-1.5'}>
            Contact Us
          </Badge>
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
                className={'w-full h-full object-contain rounded-2xl'}
              />
            </div>
            <div className={'col-span-full lg:col-span-1'}>
              <Card className='w-full h-full'>
                <CardContent>
                  <form>
                    <FieldSet className={'gap-3'}>
                      <FieldLegend className={'sr-only'}>
                        Contact form
                      </FieldLegend>

                      <FieldGroup>
                        <FieldGroup className={'grid grid-cols-2 gap-2'}>
                          <Field>
                            <FieldLabel htmlFor='name'>Name</FieldLabel>
                            <Input
                              id='name'
                              placeholder='Evil Rabbit'
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor='email'>Email</FieldLabel>
                            <Input
                              id='email'
                              placeholder='Evil Rabbit'
                              required
                            />
                          </Field>
                        </FieldGroup>

                        <Field>
                          <FieldLabel htmlFor='phone'>Phone no</FieldLabel>
                          <Input
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='+1 (555) 987-6543'
                            required
                          />
                          <FieldDescription className={'text-start'}>
                            Enter your 10-digit phone number
                          </FieldDescription>
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor='message'>Message</FieldLabel>
                          <Textarea
                            id='message'
                            placeholder='Enter your message here'
                            className='resize-none min-h-[120px]'
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field orientation='horizontal'>
                          <Checkbox
                            id='checkout-7j9-same-as-shipping-wgm'
                            defaultChecked
                          />
                          <FieldLabel
                            htmlFor='checkout-7j9-same-as-shipping-wgm'
                            className='font-normal'>
                            By submitting this form, you agree to our friendly,{' '}
                            <Link
                              href='#'
                              className={buttonVariants({
                                variant: 'link',
                                className: 'px-0! py-0.5! capitalize',
                              })}>
                              privacy policy
                            </Link>
                          </FieldLabel>
                        </Field>
                      </FieldGroup>

                      <Field orientation='horizontal'>
                        <Button variant={'skewed'} size={'lg'} type='submit'>
                          Submit
                        </Button>
                      </Field>
                    </FieldSet>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
        'scroll-m-20 text-5xl font-semibold tracking-tight first:mt-0'
      }>
      <span className={'text-primary'}>{firstChunk}</span>{' '}
      <span className={'text-destructive'}>{secondChunk}</span>
    </h2>
  );
}

function TestimonialVideo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={'outline'} size={'icon-sm'}>
            <IconPlayerPlay className={'size-4'} />
          </Button>
        </DialogTrigger>
        <DialogContent className='data-[state=open]:!zoom-in-100 data-[state=open]:slide-in-from-bottom-20 data-[state=open]:duration-600 sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Testimonial Video</DialogTitle>
            <DialogDescription>
              Watch our client testimonials to hear about their experiences with
              our services.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4'>
            <video
              controls
              src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
              poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
              width='620'>
              Sorry, your browser doesn&apos;t support embedded videos, but
              don&apos;t worry, you can
              <a href='https://archive.org/details/BigBuckBunny_124'>
                download it
              </a>
              and watch it with your favorite video player!
            </video>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' size={'sm'}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
