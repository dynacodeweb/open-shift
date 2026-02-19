'use client';

import { Button } from '@workspace/ui/components/button';
import { Calendar } from '@workspace/ui/components/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';
import { useIsMobile } from '@workspace/ui/hooks/use-mobile';
import { addDays } from '@workspace/ui/lib/date-fns';
import { type DateRange } from '@workspace/ui/lib/react-day-picker';
import { CalendarCogIcon } from 'lucide-react';
import { useState } from 'react';

export function DateRangeFilter() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  });

  const isMobile = useIsMobile();

  return (
    <div className='col-span-full sm:col-span-4 md:col-span-2 lg:col-span-1'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' className={'w-full'}>
            <CalendarCogIcon />
            Date Range
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className='w-fit p-0'
          align={isMobile ? 'end' : 'start'}>
          <Calendar
            mode='range'
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            // disabled={(date) =>
            //   date > new Date() || date < new Date('1900-01-01')
            // }
            disabled={(date) =>
              date < new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
