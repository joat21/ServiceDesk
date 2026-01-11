import type { FC } from 'react';
import type { AdminAssignment } from '@/entities/admin-assignment';
import { Button, Card } from '@/shared/ui';
import { ShieldIcon } from '@/shared/ui/icons';

interface AdminAssignmentCardProps {
  assignment: AdminAssignment;
  onEditAssignment: (assignmentId: string | number) => void;
}

export const AdminAssignmentCard: FC<AdminAssignmentCardProps> = ({
  assignment,
  onEditAssignment,
}) => {
  return (
    <Card className="gap-5 px-4 py-6 w-full">
      <div className="flex justify-between items-center gap-2 pl-4 pb-2.5 border-b border-[#c3c0c0]">
        <div className="flex flex-col">
          <span>{assignment.regionName}</span>
          <span className="text-[#666]">Регион</span>
        </div>
        <ShieldIcon />
      </div>
      <div className="flex flex-col pl-4">
        <span className="text-[#666]">Администратор</span>
        {assignment.name ? (
          <span>
            {assignment.surname} {assignment.name} {assignment.patronymic}
          </span>
        ) : (
          <span>Не назначен</span>
        )}
      </div>
      <Button onPress={() => onEditAssignment(assignment.regionId)}>
        Изменить
      </Button>
    </Card>
  );
};
