import type { FC } from 'react';
import type { Office } from '@/entities/office';
import { Button, Card } from '@/shared/ui';
import { EditIcon } from '@/shared/ui/icons';

interface OfficeCardProps {
  office: Office;
  onEditOffice: (office: Office) => void;
}

export const OfficeCard: FC<OfficeCardProps> = ({ office, onEditOffice }) => {
  return (
    <Card className="flex-row justify-between gap-3 px-4 py-5">
      <span className="text-xl">{office.fullAddress}</span>
      <Button
        className="text-foreground"
        variant="ghost"
        startContent={<EditIcon />}
        onPress={() => onEditOffice(office)}
      >
        Редактировать
      </Button>
    </Card>
  );
};
