import {
  IconBellCog,
  IconBriefcase2,
  IconCalendarClock,
  IconCurrencyDollarAustralian,
  IconFileTypePdf,
  IconHeadset,
  IconHelp,
  IconLayout2,
  IconMessage2,
  IconPercentage,
  IconQuestionMark,
  IconSearch,
  IconUserCog,
} from '@tabler/icons-react';

export const dashboardData = {
  user: {
    name: 'Mark Josh',
    role: 'Support Worker',
    email: 'm@example.com',
    avatar: '/profile-dummy.png',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconLayout2,
    },
    {
      title: 'My Jobs',
      url: '/dashboard/my-jobs',
      icon: IconBriefcase2,
    },
    {
      title: 'Shifts',
      url: '/dashboard/shifts',
      icon: IconCalendarClock,
    },
    {
      title: 'Chat',
      url: '/dashboard/chat',
      icon: IconMessage2,
    },
    {
      title: 'Payments',
      url: '/dashboard/payments',
      icon: IconCurrencyDollarAustralian,
    },
    {
      title: 'Documents',
      url: '/dashboard/documents',
      icon: IconFileTypePdf,
    },
    {
      title: 'Referrals',
      url: '/dashboard/referrals',
      icon: IconPercentage,
    },
    {
      title: 'Notifications',
      url: '/dashboard/notifications',
      icon: IconBellCog,
    },
    {
      title: 'Support',
      url: '/dashboard/support',
      icon: IconHeadset,
    },
    {
      title: 'Account',
      url: '/dashboard/account',
      icon: IconUserCog,
    },
    // {
    //   title: 'Support hours',
    //   url: '#',
    //   icon: IconCalendarStats,
    // },
    // {
    //   title: 'Inbox',
    //   url: '#',
    //   icon: IconInbox,
    // },
    // {
    //   title: 'Billing',
    //   url: '#',
    //   icon: IconReceipt2,
    // },
    // {
    //   title: 'My clients',
    //   url: '#',
    //   icon: IconUsers,
    // },
  ],
  navSecondary: [
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'About Us',
      url: '#',
      icon: IconQuestionMark,
    },
    {
      title: 'Search Workers',
      url: '#',
      icon: IconSearch,
    },
  ],
};
