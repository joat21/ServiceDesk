import { Role } from '@/entities/user';

export const START_ROUTE_BY_ROLE: Record<Role, string> = {
  [Role.Employee]: '/tickets',
  [Role.Performer]: '/tickets',
  [Role.Analyst]: '/dashboard',
  [Role.Admin]: '/admin/tickets',
  [Role.SuperAdmin]: '/superadmin/analysts',
};
