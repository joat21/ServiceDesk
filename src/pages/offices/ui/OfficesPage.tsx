import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { OfficeCard } from './OfficeCard';
import { CreateOfficeModal } from '@/features/create-office';
import { EditOfficeModal } from '@/features/edit-office';
import { useOffices, type Office } from '@/entities/office';
import { Button, PageLoader } from '@/shared/ui';

export const OfficesPage: FC = () => {
  const createModal = useDisclosure();
  const editModal = useDisclosure();
  const { data: offices, isLoading } = useOffices();
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

  if (isLoading) return <PageLoader />;
  if (!offices) return <p>Офисы не найдены</p>;

  const handleCreateOffice = () => {
    createModal.onOpen();
  };

  const handleEditOffice = (office: Office) => {
    setSelectedOffice(office);
    editModal.onOpen();
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
        onClose={createModal.onClose}
      />

      <EditOfficeModal
        isOpen={editModal.isOpen}
        onOpenChange={editModal.onOpenChange}
        onClose={editModal.onClose}
        office={selectedOffice}
      />
    </div>
  );
};
