import { useState, type FC } from 'react';
import { PerformerCard } from './PerformerCard';
import { usePerformers } from '@/entities/performer';
import { Button } from '@/shared/ui';
import { useDisclosure } from '@heroui/react';
import { EditPerformerModal } from './EditPerformerModal';

export const PerformersPage: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPerformerId, setSelectedPerformerId] = useState<
    string | number | null
  >(null);
  const { data: performers, isLoading } = usePerformers();

  if (isLoading) return 'Загрузка...';
  if (!performers) return <p>Исполнители не найдены</p>;

  const selectedPerformer = performers.find(
    (p) => p.id === selectedPerformerId
  );

  const handleEditPerformer = (performerId: string | number) => {
    setSelectedPerformerId(performerId);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold">Исполнители</h1>
        <Button>+ Добавить исполнителя</Button>
      </div>

      <ul className="grid grid-cols-2 gap-8">
        {performers.map((performer) => (
          <li key={performer.id}>
            <PerformerCard
              performer={performer}
              handleEditPerformer={handleEditPerformer}
            />
          </li>
        ))}
      </ul>

      <EditPerformerModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        performer={selectedPerformer ?? performers[0]}
      />
    </div>
  );
};
