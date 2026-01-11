import type { FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { PriorityCard } from './PriorityCard';
import { EditPrioritiesModal } from '@/features/edit-priorities';
import { usePriorities } from '@/entities/priority';
import { Button } from '@/shared/ui';
import { EditIcon } from '@/shared/ui/icons';

export const PrioritiesPage: FC = () => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const { data: priorities, isLoading } = usePriorities();

  if (isLoading) return 'Загрузка...';
  if (!priorities) return <p>Приоритеты не найдены</p>;

  const handleEditFactors = () => {
    onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold">Приоритеты</h1>
        <Button onPress={handleEditFactors} startContent={<EditIcon />}>
          Редактировать коэффициенты
        </Button>
      </div>

      <ul className="flex gap-8 w-full">
        {priorities.map((priority) => (
          <li key={priority.priorityId} className="w-full">
            <PriorityCard {...priority} />
          </li>
        ))}
      </ul>

      <EditPrioritiesModal
        priorities={priorities}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};
