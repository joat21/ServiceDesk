import type { FC } from 'react';
import type { PerformerStatistics } from '@/entities/statistics';

interface StatisticsProps {
  stats: PerformerStatistics;
}

export const Statistics: FC<StatisticsProps> = ({ stats }) => {
  console.log(stats);
  return (
    <div className="flex justify-between items-center w-full">
      <div>Просроченные: {stats.expired}</div>
      <div>Назначенные: {stats.assigned}</div>
      <div>Выполненные: {stats.completed}</div>
      <div>В работе: {stats.inProgress}</div>
    </div>
  );
};
