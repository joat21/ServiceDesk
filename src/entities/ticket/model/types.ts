// TODO: оформить как кросс импорты
import type { PriorityName } from '@/entities/priority/model/types';
import type { StatusName } from '@/entities/status/model/types';
import type { Role } from '@/entities/user';

export interface Ticket {
  id: number;
  theme: string;
  description: string;
  status: StatusName;
  priority: PriorityName;
  category: string;
  deadline: string;
  performer: string;
  number: string;
  createdAt: string;
  photo: string[];
  office: string;
  location: string;
}

export interface TicketsFilter {
  search?: string;
  priorityId?: number | null;
  statusId?: number | null;
  deadline?: string | null;
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
