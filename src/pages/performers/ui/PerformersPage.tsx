import type { FC } from 'react';
import { PerformerCard } from './PerformerCard';
import { usePerformers } from '@/entities/performer';
import { Button } from '@/shared/ui';

export const PerformersPage: FC = () => {
  const { data: performers, isLoading } = usePerformers();

  if (isLoading) return 'Загрузка...';
  if (!performers) return <p>Исполнители не найдены</p>;

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold">Исполнители</h1>
        <Button>+ Добавить исполнителя</Button>
      </div>

      <ul className="grid grid-cols-2 gap-8">
        {performers.map((performer) => (
          <li key={performer.id}>
            <PerformerCard performer={performer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
