import { Role } from '@/entities/user';
import {
  AlertCircleIcon,
  MapPinIcon,
  ShieldIcon,
  TagIcon,
  TextFileIcon,
  UsersIcon,
} from '@/shared/ui/icons';

type SidebarItem = {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export const sidebarItems: Partial<Record<Role, SidebarItem[]>> = {
  [Role.Admin]: [
    { label: 'Заявки', icon: TextFileIcon, path: '/admin/tickets' },
    { label: 'Исполнители', icon: UsersIcon, path: '/admin/performers' },
    { label: 'Офисы', icon: MapPinIcon, path: '/admin/offices' },
  ],
  [Role.SuperAdmin]: [
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
  ],
};
