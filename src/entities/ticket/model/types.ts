// TODO: оформить как кросс импорты
import type { PriorityName } from '@/entities/priority/model/types';
import type { StatusName } from '@/entities/status/model/types';

export interface Ticket {
  id: string;
  number: string;
  theme: string;
  description: string;
  office: string;
  priority: PriorityName;
  status: StatusName;
  categoryName: string;
  dueAt: string;
  performerName: string;
  createdAt: string;
  photos: string[];
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
  theme: string;
  message: string;
  username: string;
  createdAt: string;
  photos: string[];
  rating: number | null;
}
