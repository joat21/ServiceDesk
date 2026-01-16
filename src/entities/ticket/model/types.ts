// TODO: оформить как кросс импорты
import type { PriorityName } from '@/entities/priority/model/types';
import type { StatusName } from '@/entities/status/model/types';
import type { Role } from '@/entities/user';

export interface Ticket {
  id: string;
  number: string;
  theme: string;
  description: string;
  office: string;
  priority: PriorityName;
  status: StatusName;
  category: string;
  dueAt: string;
  performer: string;
  createdAt: string;
  photo: string[];
  location: string;
  isExpired: boolean;
}

export interface TicketsFilter {
  search?: string;
  priorityId?: number | null;
  statusId?: number | null;
  dueAt?: string | null;
  page?: number;
}

export interface TicketHistoryItem {
  id: string;
  ticketId: string | number;
  actor: {
    id: string | number;
    name: string;
    role: Role | null;
  };
  theme: string;
  message: string;
  photo: string[] | null;
  rating: number | null;
  createdAt: string;
}
