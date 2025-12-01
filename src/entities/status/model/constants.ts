import type { StatusName } from './types';

export const STATUS_LABELS: Record<StatusName, string> = {
  pending: 'На рассмотрении',
  assigned: 'Назначен исполнитель',
  in_progress: 'В работе',
  outsourced: 'Передано подрядчику',
  completed: 'Выполнено',
  rejected: 'Отклонено',
};

export const STATUS_MAP: Record<StatusName, { label: string; color: string }> =
  {
    pending: { label: STATUS_LABELS['pending'], color: 'bg-status-pending' },
    assigned: { label: STATUS_LABELS['assigned'], color: 'bg-status-assigned' },
    in_progress: {
      label: STATUS_LABELS['in_progress'],
      color: 'bg-status-in_progress',
    },
    outsourced: {
      label: STATUS_LABELS['outsourced'],
      color: 'bg-status-outsourced',
    },
    completed: {
      label: STATUS_LABELS['completed'],
      color: 'bg-status-completed',
    },
    rejected: {
      label: STATUS_LABELS['rejected'],
      color: 'bg-status-rejected',
    },
  };
