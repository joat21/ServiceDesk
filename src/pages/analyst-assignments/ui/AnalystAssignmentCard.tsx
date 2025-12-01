import type { AnalystAssignment } from '@/entities/analyst-assignment';
import { Button, Card } from '@/shared/ui';
import { UsersIcon } from '@/shared/ui/icons';
import type { FC } from 'react';

interface AnalystAssignmentCardProps {
  assignment: AnalystAssignment;
  onEditAssignment: (assignmentId: string | number) => void;
}

export const AnalystAssignmentCard: FC<AnalystAssignmentCardProps> = ({
  assignment,
  onEditAssignment,
}) => {
  return (
    <Card className="gap-5 px-4 py-6 w-full">
      <div className="flex justify-between items-center gap-2 pl-4 pb-2.5 border-b border-[#c3c0c0]">
        <div className="flex flex-col">
          <span>{assignment.filial}</span>
          <span className="text-[#666]">Филиал</span>
        </div>
        <UsersIcon />
      </div>
      <div className="flex flex-col pl-4">
        <span className="text-[#666]">Аналитик</span>
        <span>{assignment.fullName}</span>
      </div>
      <Button onPress={() => onEditAssignment(assignment.id)}>Изменить</Button>
    </Card>
  );
};
