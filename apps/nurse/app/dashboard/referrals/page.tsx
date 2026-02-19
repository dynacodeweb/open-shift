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
export default async function ReferralsPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Referrals</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Earn rewards by referring friends to our platform. Share your unique
            referral code and start earning today!
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
