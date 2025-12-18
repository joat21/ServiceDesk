import type { PriorityName } from './types';

export const PRIORITY_LABELS: Record<PriorityName, string> = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
  express: 'Срочный',
};

export const PRIORITY_KEYS: Record<string, PriorityName> = {
  Низкий: 'low',
  Средний: 'medium',
  Высокий: 'high',
  Срочный: 'express',
};

export const PRIORITY_MAP: Record<
  PriorityName,
  { label: string; color: string }
> = {
  low: { label: PRIORITY_LABELS['low'], color: 'bg-priority-low' },
  medium: { label: PRIORITY_LABELS['medium'], color: 'bg-priority-medium' },
  high: { label: PRIORITY_LABELS['high'], color: 'bg-priority-high' },
  express: { label: PRIORITY_LABELS['express'], color: 'bg-priority-express' },
};
