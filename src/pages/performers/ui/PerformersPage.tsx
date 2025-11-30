import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { PerformerCard } from './PerformerCard';
import { CreatePerformerModal } from '@/features/create-performer';
import { EditPerformerModal } from '@/features/edit-performer';
import { usePerformers } from '@/entities/performer';
import { Button } from '@/shared/ui';

export const PerformersPage: FC = () => {
  const createModal = useDisclosure();
  const editModal = useDisclosure();
  const [selectedPerformerId, setSelectedPerformerId] = useState<
    string | number | null
  >(null);
  const { data: performers, isLoading } = usePerformers();

  if (isLoading) return 'Загрузка...';
  if (!performers) return <p>Исполнители не найдены</p>;

  const selectedPerformer = performers.find(
    (p) => p.id === selectedPerformerId
  );

  const handleCreatePerformer = () => {
    createModal.onOpen();
  };

  const handleEditPerformer = (performerId: string | number) => {
    setSelectedPerformerId(performerId);
    editModal.onOpen();
  };

  const handleCreatePerformerSubmit = () => {
    console.log('Исполнитель создан');
    createModal.onClose();
  };

  const handleEditPerformerSubmit = () => {
    console.log('Данные сохранены');
    editModal.onClose();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold">Исполнители</h1>
        <Button onPress={handleCreatePerformer}>+ Добавить исполнителя</Button>
      </div>

      <ul className="grid grid-cols-2 gap-8">
        {performers.map((performer) => (
          <li key={performer.id}>
            <PerformerCard
              performer={performer}
              onEditPerformer={handleEditPerformer}
            />
          </li>
        ))}
      </ul>

      <CreatePerformerModal
        isOpen={createModal.isOpen}
        onClose={createModal.onClose}
        onOpenChange={createModal.onOpenChange}
        action={<Button onPress={handleCreatePerformerSubmit}>Добавить</Button>}
      />

      <EditPerformerModal
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        onOpenChange={editModal.onOpenChange}
        performer={selectedPerformer ?? performers[0]}
        action={<Button onPress={handleEditPerformerSubmit}>Сохранить</Button>}
      />
    </div>
  );
};
