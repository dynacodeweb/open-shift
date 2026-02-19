import { requireAuth } from '@/lib/require-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};
export default async function NotificationsPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Notifications</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Stay updated with the latest notifications and alerts related to
            your account and activities.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </CardContent>
    </Card>
  );
}
