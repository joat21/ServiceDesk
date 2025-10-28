export interface User {
  id: string | number;
  systemId: string;
  name: string;
  surname: string;
  email: string;
  role: Role;
  region: string;
  office: string | string[];
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
