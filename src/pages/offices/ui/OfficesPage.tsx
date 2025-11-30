import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { OfficeCard } from './OfficeCard';
import { useOffices, type Office } from '@/entities/office';
import { Button } from '@/shared/ui';
import { CreateOfficeModal } from '@/features/create-office';
import { EditOfficeModal } from '@/features/edit-office';

export const OfficesPage: FC = () => {
  const createModal = useDisclosure();
  const editModal = useDisclosure();
  const { data: offices, isLoading } = useOffices();
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

  if (isLoading) return 'Загрузка...';
  if (!offices) return <p>Офисы не найдены</p>;

  const handleCreateOffice = () => {
    createModal.onOpen();
  };

  const handleEditOffice = (office: Office) => {
    setSelectedOffice(office);
    editModal.onOpen();
  };

  const handleCreateOfficeSubmit = () => {
    console.log('Офис добавлен');
    createModal.onClose();
  };

  const handleEditOfficeSubmit = () => {
    console.log('Данные сохранены', selectedOffice);
    editModal.onClose();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-semibold">Офисы</h1>
        <Button onPress={handleCreateOffice}>+ Добавить офис</Button>
      </div>

      <ul className="flex flex-col gap-5 w-full">
        {offices.map((office) => (
          <li key={office.id}>
            <OfficeCard office={office} onEditOffice={handleEditOffice} />
          </li>
        ))}
      </ul>

      <CreateOfficeModal
        isOpen={createModal.isOpen}
        onOpenChange={createModal.onOpenChange}
        action={<Button onPress={handleCreateOfficeSubmit}>Добавить</Button>}
      />

      <EditOfficeModal
        isOpen={editModal.isOpen}
        onOpenChange={editModal.onOpenChange}
        action={<Button onPress={handleEditOfficeSubmit}>Сохранить</Button>}
      />
    </div>
  );
};
