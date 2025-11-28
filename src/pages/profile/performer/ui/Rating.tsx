import { Card } from '@/shared/ui';
import { StarIcon } from '@/shared/ui/icons';
import type { FC } from 'react';

interface RatingProps {
  rating: number;
}

export const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <Card className="p-4 rounded-xl">
      <div className="flex justify-center gap-6 text-xl font-medium text-center">
        <h2>Рейтинг</h2>
        <span className="flex gap-1">
          <StarIcon />
          <span>{rating}</span>
        </span>
      </div>
    </Card>
  );
};
