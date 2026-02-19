import { requireAuth } from '@/lib/require-auth';
import { Card, CardContent } from '@workspace/ui/components/card';
import { PartyPopper } from 'lucide-react';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};
export default async function ChatPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none shadow-none'}>
      <CardContent
        className={
          'aspect-video h-full w-full flex items-center justify-center'
        }>
        Coming soon <PartyPopper className={'size-6'} />
      </CardContent>
    </Card>
  );
}
