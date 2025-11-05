export interface Ticket {
  id: number;
  theme: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  deadline: string;
  performer: string;
  number: string;
}

export interface TicketsFilter {
  search?: string;
  priorityId?: number | null;
  statusId?: number | null;
  deadline?: string | null;
}
