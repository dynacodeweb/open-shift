import { requireAuth } from '@/lib/require-auth';
import {
  IconCircleCheck,
  IconClock,
  IconCurrencyDollarAustralian,
  IconTrendingUp,
} from '@tabler/icons-react';
import {
  Card,
  CardAction,
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
export default async function PaymentsPage(props: PageProps) {
  await requireAuth();
  return (
    <Card className={'bg-transparent rounded-none border-none'}>
      <CardHeader>
        <CardTitle>
          <h2>Payments</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Track and manage your payments, view payment history, and update
            your payment information to ensure smooth transactions and financial
            management.
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent
        className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-base'}>Total Earnings</p>
            </CardDescription>
            <CardAction className={'bg-primary/10 rounded-full p-2'}>
              <IconCurrencyDollarAustralian
                className={'size-5 stroke-primary'}
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-2xl font-bold'}>$4832.00</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>All times</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-base'}>Paid</p>
            </CardDescription>
            <CardAction className={'bg-green-100 rounded-full p-2'}>
              <IconCircleCheck className={'size-5 stroke-green-500'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-2xl font-bold'}>$3648.00</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>Received</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-base'}>Pending</p>
            </CardDescription>
            <CardAction className={'bg-orange-100 rounded-full p-2'}>
              <IconClock className={'size-6 stroke-orange-500'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-2xl font-bold'}>$1184.00</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>Processing</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className={'gap-3'}>
          <CardHeader>
            <CardDescription>
              <p className={'font-semibold text-base'}>This month</p>
            </CardDescription>
            <CardAction className={'bg-destructive/10 rounded-full p-2'}>
              <IconTrendingUp className={'size-5 stroke-destructive'} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h3 className={'text-2xl font-bold'}>$2016.00</h3>
          </CardContent>
          <CardContent>
            <CardDescription>
              <p>January 2026</p>
            </CardDescription>
          </CardContent>
        </Card>
      </CardContent>
      <CardContent>
        <Card className={'rounded-sm shadow-none gap-3'}>
          <CardHeader>
            <CardTitle className={'text-2xl font-bold'}>
              Payment History
            </CardTitle>
          </CardHeader>
          <hr />
          <CardContent>
            <TableDemo />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@workspace/ui/components/table';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
