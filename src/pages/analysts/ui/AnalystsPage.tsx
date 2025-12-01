import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { useAnalystAssignments } from '@/entities/analyst-assignment';
import { EditAnalystAssignmentModal } from '@/features/edit-analyst-assignment';
import { Button } from '@/shared/ui';
import { AnalystAssignmentCard } from './AnalystAssignmentCard';

export const AnalystsPage: FC = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<
    string | number | null
  >(null);
  const { data: analystAssignments, isLoading } = useAnalystAssignments();

  if (isLoading) return 'Загрузка...';
  if (!analystAssignments) return <p>Аналитики не найдены</p>;

  const selectedAssignment = analystAssignments.find(
    (p) => p.id === selectedAssignmentId
  );

  const handleEditAssignment = (assignmentId: string | number) => {
    setSelectedAssignmentId(assignmentId);
    onOpen();
  };

  const handleEditAssignmentSubmit = () => {
    console.log('Данные сохранены');
    onClose();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="self-start">
        <h1 className="mb-2 text-2xl font-semibold">Аналитики</h1>
        <p className="text-[#666]">Управление аналитиками по филиалам</p>
      </div>

      <ul className="grid grid-cols-2 gap-8 w-full">
        {analystAssignments.map((assignment) => (
          <li key={assignment.id} className="w-full">
            <AnalystAssignmentCard
              assignment={assignment}
              onEditAssignment={handleEditAssignment}
            />
          </li>
        ))}
      </ul>

      <EditAnalystAssignmentModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        analystAssignment={selectedAssignment ?? analystAssignments[0]}
        action={<Button onPress={handleEditAssignmentSubmit}>Назначить</Button>}
      />
    </div>
  );
};
