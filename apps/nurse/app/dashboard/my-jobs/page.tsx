import { requireAuth } from '@/lib/require-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { DateRangeFilter } from './_components/date-range-filter';
import InputFilter from './_components/input-filter';
import LayoutToggle from './_components/layout-toggle';
import MoreFilters from './_components/more-filters';
import RateFilter from './_components/rate-filter';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};
export default async function MyJobsPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none shadow-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Available Shifts</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Find and apply for available shifts that match your skills and
            preferences. Browse through a variety of job opportunities and take
            control of your work schedule.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className={'space-y-6'}>
        <div className={'grid grid-cols-8 gap-4'}>
          <InputFilter />
          <DateRangeFilter />
          <RateFilter />
          <MoreFilters />
          <LayoutToggle />
        </div>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </CardContent>
    </Card>
  );
}
