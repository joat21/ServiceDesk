import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { AnalystAssignmentCard } from './AnalystAssignmentCard';
import { EditAnalystAssignmentModal } from '@/features/edit-analyst-assignment';
import { useAnalystAssignments } from '@/entities/analyst-assignment';

export const AnalystAssignmentsPage: FC = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<
    string | number | null
  >(null);
  const { data: analystAssignments, isLoading } = useAnalystAssignments();

  if (isLoading) return 'Загрузка...';
  if (!analystAssignments) return <p>Аналитики не найдены</p>;

  const selectedAssignment = analystAssignments.find(
    (asssignment) => asssignment.filialId === selectedAssignmentId
  );

  const handleEditAssignment = (assignmentId: string | number) => {
    setSelectedAssignmentId(assignmentId);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="self-start">
        <h1 className="mb-2 text-2xl font-semibold">Аналитики</h1>
        <p className="text-[#666]">Управление аналитиками по филиалам</p>
      </div>

      <ul className="grid grid-cols-2 gap-8 w-full">
        {analystAssignments.map((assignment) => (
          <li key={assignment.filialId} className="w-full">
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
      />
    </div>
  );
};
