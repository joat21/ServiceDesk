import type { FC } from 'react';
import { Card } from '@/shared/ui';
import type { Priority } from '@/entities/priority';
import { AlertCircleIcon } from '@/shared/ui/icons';

export const PriorityCard: FC<Priority> = ({ name, slaFactor }) => {
  return (
    <Card className="gap-5 px-4 py-6 w-full">
      <div className="flex justify-between items-center gap-2 pl-4 pb-2.5 border-b border-[#c3c0c0]">
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="text-[#666]">Приоритет</span>
        </div>
        <AlertCircleIcon />
      </div>
      <div className="flex flex-col pl-4">
        <span className="text-[#666]">Коэффициент</span>
        <span>×{slaFactor}</span>
      </div>
    </Card>
  );
};
