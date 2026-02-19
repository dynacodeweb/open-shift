import { requireAuth } from '@/lib/require-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@workspace/ui/components/tabs';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};
export default async function ShiftsPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none'}>
      <CardHeader>
        <CardTitle>
          <h2>My Shifts</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Manage your shifts, view upcoming schedules, and stay organized with
            your work commitments.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue='upcoming' className='w-full'>
          <TabsList className={'rounded-full'}>
            <TabsTrigger value='upcoming' className={'rounded-full'}>
              Upcoming (5)
            </TabsTrigger>
            <TabsTrigger value='completed' className={'rounded-full'}>
              Completed (3)
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value='upcoming'
            className={'border-border border-2 border-dashed aspect-video'}>
            Make changes to your account here.
            <Card>1</Card>
          </TabsContent>
          <TabsContent
            value='completed'
            className={'border-border border-2 border-dashed aspect-video'}>
            Change your password here.
            <Card>1</Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
