import {
  IconBriefcase2,
  IconCalendarClock,
  IconCalendarStats,
  IconHelp,
  IconInbox,
  IconLayout2,
  IconPencil,
  IconQuestionMark,
  IconReceipt2,
  IconSearch,
  IconSettingsSpark,
  IconUsers,
  IconUsersGroup,
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
      title: 'Edit profile',
      url: '/dashboard/edit-profile',
      icon: IconPencil,
    },
    {
      title: 'Manage sessions',
      url: '#',
      icon: IconCalendarClock,
    },
    {
      title: 'Jobs',
      url: '#',
      icon: IconBriefcase2,
    },
    {
      title: 'Manage clients',
      url: '#',
      icon: IconUsersGroup,
    },
    {
      title: 'Support hours',
      url: '#',
      icon: IconCalendarStats,
    },
    {
      title: 'Inbox',
      url: '#',
      icon: IconInbox,
    },
    {
      title: 'Billing',
      url: '#',
      icon: IconReceipt2,
    },
    {
      title: 'My clients',
      url: '#',
      icon: IconUsers,
    },
    {
      title: 'Account',
      url: '#',
      icon: IconSettingsSpark,
    },
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
