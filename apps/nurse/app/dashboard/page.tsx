import { ThemeModeToggler } from '@/components/shared/theme-toggler';
import { requireAuth } from '@/lib/require-auth';
import {
  IconBriefcase2,
  IconCalendarCheck,
  IconClockCheck,
  IconCurrencyDollarAustralian,
  IconFileTypeDoc,
  IconQuestionMark,
  IconTrendingUp,
} from '@tabler/icons-react';
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
import { Separator } from '@workspace/ui/components/separator';
import Link from 'next/link';

export default async function DashboardPage() {
  const { user } = await requireAuth();

  return (
    <Card className={'bg-transparent rounded-none border-none shadow-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Welcome back, {user.firstName}!</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Here’s a quick overview of your dashboard. You can manage your
            account, view your schedule, and check out the latest client reviews
            all in one place.
          </p>
        </CardDescription>
        <CardAction>
          <ThemeModeToggler />
        </CardAction>
      </CardHeader>
      <CardContent
        className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-lg'}>Upcoming Shifts</p>
            </CardDescription>
            <CardAction className={'bg-primary/20 rounded-full p-1'}>
              <IconCalendarCheck className={'size-6 stroke-primary'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-xl font-medium'}>3</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>Next 7 days</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-lg'}>Hours This month</p>
            </CardDescription>
            <CardAction className={'bg-purple-500/20 rounded-full p-1'}>
              <IconClockCheck className={'size-6 stroke-purple-400'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-xl font-medium'}>64</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>January 2026</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-lg'}>Earnings</p>
            </CardDescription>
            <CardAction className={'bg-green-500/20 rounded-full p-1'}>
              <IconCurrencyDollarAustralian
                className={'size-6 stroke-green-400'}
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-xl font-medium'}>$2688</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>This month</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-lg'}>Completion Rate</p>
            </CardDescription>
            <CardAction className={'bg-destructive/20 rounded-full p-1'}>
              <IconTrendingUp className={'size-6 stroke-destructive'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-xl font-medium'}>98%</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>Excellent!</p>
            </CardDescription>
          </CardContent>
        </Card>
      </CardContent>

      <CardContent>
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-6'}>
          <div className={'col-span-full lg:col-span-2 space-y-6'}>
            <Card className={'aspect-22/9'}>
              <CardHeader>
                <CardTitle>Upcoming Shifts</CardTitle>
                <CardAction>
                  <Link
                    href={'#'}
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'link',
                    })}>
                    View All
                  </Link>
                </CardAction>
              </CardHeader>
              <Separator />
              <CardContent>All your upcoming shifts,</CardContent>
            </Card>
            <Card className={'aspect-22/9'}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <Separator />
              <CardContent>All types of platform activity,</CardContent>
            </Card>
          </div>
          <div className={'col-span-full lg:col-span-1 space-y-6'}>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className={'flex flex-col gap-4'}>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    size: 'sm',
                    className: 'w-full justify-start',
                  })}>
                  <IconBriefcase2 className={'size-4'} />
                  Browse Available Shifts
                </Link>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    size: 'sm',
                    className: 'w-full justify-start',
                  })}>
                  <IconFileTypeDoc className={'size-4'} />
                  Update Documents
                </Link>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    size: 'sm',
                    className: 'w-full justify-start',
                  })}>
                  <IconQuestionMark className={'size-4'} />
                  Get Support
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Refer a Nurse</CardTitle>
                <CardDescription>
                  <p>
                    Earn $100 for every nurse you refer who completes their
                    first shift with us. Share the love and help your friends
                    find great nursing opportunities!
                  </p>
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardFooter>
                <Link
                  href={'#'}
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'secondary',
                    className: 'w-full',
                  })}>
                  Start Referring
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
