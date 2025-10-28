export interface User {
  id: string | number;
  systemId: string;
  name: string;
  surname: string;
  email: string;
  role: Role;
  department: string;
  region: string;
  office: string[];
  categories?: string[];
  rating?: number;
}

export const Role = {
  Employee: 'employee',
  Performer: 'performer',
  Admin: 'admin',
  Analyst: 'analyst',
  SuperAdmin: 'superadmin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const RoleLabel: Record<Role, string> = {
  employee: 'Сотрудник',
  performer: 'Исполнитель',
  admin: 'Администратор',
  analyst: 'Аналитик',
  superadmin: 'Главный администратор',
};
