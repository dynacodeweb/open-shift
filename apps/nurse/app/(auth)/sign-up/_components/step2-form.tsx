import Image from 'next/image';

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';

export default function Step2Form() {
  return (
    <>
      {/* <Card className={'max-w-lg w-full h-fit gap-4 py-4'}> */}
      <CardContent className={'h-36 w-full'}>
        <Image
          src={'/p6-fit.9ac324b9 1.svg'}
          alt='login-scrn'
          width={300}
          height={300}
          className={'w-full h-full object-contain'}
        />
      </CardContent>
      <CardHeader>
        <CardTitle>
          <h2 className={'text-xl'}>You won’t be a Open Service employee.</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <CardDescription>
          <p className={'font-semibold'}>
            Instead, you’ll operate as an independent contractor, which means:
          </p>
          <ul className={'list-disc list-inside'}>
            <li>You’ll be your own boss</li>
            <li>
              You’ll need to have (or apply for) an Australian Business Number
              (ABN)
            </li>
            <li>
              You’ll be responsible for managing your own tax and superannuation
            </li>
          </ul>
        </CardDescription>
        <CardDescription>
          <p className={'font-semibold'}>
            To be approved on Open Service, you’ll also need:
          </p>
          <ul className={'list-disc list-inside'}>
            <li>A valid mobile phone number</li>{' '}
            <li>
              An NDIS Worker Screening Check (required for all services,
              including aged care)
            </li>
            <li>At least two professional or character references</li>
            <li>Relevant qualifications for the services you plan to offer</li>
            <li>
              A valid Working with Vulnerable People card (required in Tasmania
              and the ACT)
            </li>
            <li>
              A Working with Children Check, if you intend to work with children
              or young people under 18
            </li>
            <li>A profile photo and a short personal bio</li>
          </ul>
        </CardDescription>
      </CardContent>
      {/* </Card> */}
    </>
  );
}
