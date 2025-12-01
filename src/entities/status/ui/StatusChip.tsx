import { cn } from '@heroui/react';
import { STATUS_MAP } from '../model/constants';
import type { StatusName } from '../model/types';

export const StatusChip = ({ value }: { value: StatusName }) => {
  return (
    <span className={cn('px-2.5 py-1 rounded-lg', STATUS_MAP[value].color)}>
      {STATUS_MAP[value].label}
    </span>
  );
};
