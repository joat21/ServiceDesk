import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { AdminAssignmentCard } from './AdminAssignmentCard';
import { EditAdminAssignmentModal } from '@/features/edit-admin-assignment';
import { useAdminAssignments } from '@/entities/admin-assignment';

export const AdminAssignmentsPage: FC = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<
    string | number | null
  >(null);
  const { data: adminAssignments, isLoading } = useAdminAssignments();

  if (isLoading) return 'Загрузка...';
  if (!adminAssignments) return <p>Администраторы не найдены</p>;

  const selectedAssignment = adminAssignments.find(
    (p) => p.regionId === selectedAssignmentId
  );

  const handleEditAssignment = (assignmentId: string | number) => {
    setSelectedAssignmentId(assignmentId);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="self-start">
        <h1 className="mb-2 text-2xl font-semibold">Администраторы</h1>
        <p className="text-[#666]">Управление администраторами по регионам</p>
      </div>

      <ul className="grid grid-cols-2 gap-8 w-full">
        {adminAssignments.map((assignment) => (
          <li key={assignment.regionId} className="w-full">
            <AdminAssignmentCard
              assignment={assignment}
              onEditAssignment={handleEditAssignment}
            />
          </li>
        ))}
      </ul>

      <EditAdminAssignmentModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        adminAssignment={selectedAssignment ?? adminAssignments[0]}
      />
    </div>
  );
};
