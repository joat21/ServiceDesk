import { cn } from '@heroui/react';
import { PRIORITY_MAP } from '../model/constants';
import type { PriorityName } from '../model/types';

export const PrioirityChip = ({ value }: { value: PriorityName }) => {
  return (
    <span className={cn('px-2.5 py-1 rounded-lg', PRIORITY_MAP[value].color)}>
      {PRIORITY_MAP[value].label}
    </span>
  );
};
