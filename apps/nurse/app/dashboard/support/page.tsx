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
export default async function SupportPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Support</h2>
        </CardTitle>
        <CardDescription>
          <p>
            If you have any questions or need assistance, please contact our
            support team.
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
