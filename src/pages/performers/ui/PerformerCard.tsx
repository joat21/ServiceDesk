import type { FC } from 'react';
// import { Button } from '@heroui/react';
import type { Performer } from '@/entities/performer';
import { Card, Rating } from '@/shared/ui';
// import { EditIcon } from '@/shared/ui/icons';

interface PerformerCardProps {
  performer: Performer;
  // onEditPerformer: (performerId: string | number) => void;
}

export const PerformerCard: FC<PerformerCardProps> = ({
  performer,
  // onEditPerformer,
}) => {
  return (
    <Card className="gap-8 px-4 py-6 w-full h-full">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-medium">
              {performer.surname} {performer.name} {performer.patronymic}
            </h2>
            {/* <Button
              size="sm"
              variant="light"
              onPress={() => onEditPerformer(performer.id)}
              isIconOnly
            >
              <EditIcon />
            </Button> */}
          </div>

          <Rating value={performer.rating} />
        </div>
        <span>{performer.systemId}</span>
        <span>{performer.email}</span>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-medium">Категории заявок</h3>
        <ul className="flex flex-wrap gap-2.5">
          {performer.category.map((category) => (
            <li
              key={category}
              className="px-3 py-1 rounded-lg min-w-36 font-medium text-center bg-[#FFDADA]"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-medium">Офисы</h3>
        <ul className="flex flex-col">
          {performer.office.map((office) => (
            <li key={office}>{office}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
