import type { FC } from 'react';
import { Card } from '@/shared/ui';

interface StatisticsCardProps {
  label: string;
  value: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const StatisticsCard: FC<StatisticsCardProps> = ({
  label,
  value,
  icon: Icon,
}) => {
  return (
    <Card className="flex-row gap-3 p-4 max-w-56 w-full">
      <Icon />
      <div className="flex flex-col text-xl font-medium">
        <span>{label}</span>
        <span className="text-[#666]">{value}</span>
      </div>
    </Card>
  );
};
