import {
  AlertCircleIcon,
  MapPinIcon,
  ShieldIcon,
  TagIcon,
  TextFileIcon,
  UsersIcon,
} from '@/shared/ui/icons';

export const adminSidebarItems = [
  { label: 'Заявки', icon: TextFileIcon, path: '/admin/tickets' },
  { label: 'Исполнители', icon: UsersIcon, path: '/admin/performers' },
  { label: 'Офисы', icon: MapPinIcon, path: '/admin/offices' },
];

export const superadminSidebarItems = [
  { label: 'Аналитики', icon: UsersIcon, path: '/superadmin/analysts' },
  { label: 'Администраторы', icon: ShieldIcon, path: '/superadmin/admins' },
  {
    label: 'Категории и SLA',
    icon: TagIcon,
    path: '/superadmin/categories',
  },
  {
    label: 'Приоритеты',
    icon: AlertCircleIcon,
    path: '/superadmin/priorities',
  },
];
