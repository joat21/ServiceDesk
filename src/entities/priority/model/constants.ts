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

export const PRIORITY_CHIP_MAP: Record<
  PriorityName,
  { label: string; className: string }
> = {
  low: { label: PRIORITY_LABELS.low, className: 'bg-priority-chip-low' },
  medium: {
    label: PRIORITY_LABELS.medium,
    className: 'bg-priority-chip-medium',
  },
  high: { label: PRIORITY_LABELS.high, className: 'bg-priority-chip-high' },
  express: {
    label: PRIORITY_LABELS.express,
    className: 'bg-priority-chip-express',
  },
};

export const PRIORITY_INDICATOR_COLOR: Record<PriorityName, string> = {
  low: 'text-priority-indicator-low',
  medium: 'text-priority-indicator-medium',
  high: 'text-priority-indicator-high',
  express: 'text-priority-indicator-express',
};
