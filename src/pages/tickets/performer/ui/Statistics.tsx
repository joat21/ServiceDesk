import type { FC } from 'react';
import {
  StatisticsCard,
  type PerformerStatistics,
} from '@/entities/statistics';
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  UserFilledIcon,
} from '@/shared/ui/icons';

interface StatisticsProps {
  stats: PerformerStatistics;
}

export const Statistics: FC<StatisticsProps> = ({ stats }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full">
      <StatisticsCard
        label="Просроченные"
        value={stats.expired}
        icon={AlertTriangleIcon}
      />
      <StatisticsCard
        label="Назначенные"
        value={stats.assigned}
        icon={UserFilledIcon}
      />
      <StatisticsCard
        label="Выполненные"
        value={stats.completed}
        icon={CheckCircleIcon}
      />
      <StatisticsCard
        label="В работе"
        value={stats.inProgress}
        icon={ClockIcon}
      />
    </div>
  );
};
