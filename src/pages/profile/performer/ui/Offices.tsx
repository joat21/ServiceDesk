import type { FC } from 'react';
import { Card } from '@/shared/ui';
import { MapPinIcon } from '@/shared/ui/icons';

interface OfficesProps {
  offices: string[];
}

export const Offices: FC<OfficesProps> = ({ offices }) => {
  return (
    <Card className="p-4 rounded-xl h-full">
      <h2 className="mb-6 text-xl font-medium">Офисы для выполнения заявок</h2>
      <ul className="flex flex-col gap-5">
        {offices.map((office) => (
          <li key={office} className="flex gap-2.5 font-medium">
            <MapPinIcon width={24} height={24} />
            <span>{office}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
