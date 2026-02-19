'use client';

import { dashboardData } from '@/constants';
import { IconPointFilled } from '@tabler/icons-react';
// import { type Icon } from '@tabler/icons-react';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@workspace/ui/components/sidebar';
import type { Route } from 'next';
import Link, { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMain() {
  const items = dashboardData.navMain;
  const pathname = usePathname();
  const { pending } = useLinkStatus();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={pathname === item.url}>
              <Link href={item.url as Route} className={'justify-between'}>
                <span className={'inline-flex items-center gap-2'}>
                  <item.icon className={'size-4'} />
                  <span className={'collapsed data-[collapsed]:hidden'}>
                    {item.title}
                  </span>
                </span>
                <span className={'block'}>
                  {pending ? (
                    <IconPointFilled className={'size-4 animate-pulse'} />
                  ) : null}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
