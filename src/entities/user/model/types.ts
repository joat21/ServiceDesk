export interface User {
  name: string;
  surname: string;
  patronymic: string;
  roleName: Role;
  userId: string | number;
  email: string;
  category?: string[];
  rating?: number;
  office: string[];
  // regiodId?
  region: string;
  systemId: string;
  avatar: string;
}

export interface AuthUser {
  userId: string;
  name: string;
  surname: string;
  patronymic: string;
  roleName: Role;
  avatar: string;
  isExist: boolean;
  email?: string;
}

export const Role = {
  Employee: 'employee',
  Performer: 'performer',
  Admin: 'admin',
  Analyst: 'analyst',
  SuperAdmin: 'superadmin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const ROLE_LABEl: Record<Role, string> = {
  employee: 'Сотрудник',
  performer: 'Исполнитель',
  admin: 'Администратор',
  analyst: 'Аналитик',
  superadmin: 'Главный администратор',
};

export interface SearchUserParams {
  regionId?: number;
  filialId?: number;
  fullname?: string;
}

export interface SearchedUser {
  userId: string;
  name: string;
  surname: string;
  patronymic: string;
  email: string;
}

export interface RegisterRequest {
  regionId: number;
  officeId: string;
}
