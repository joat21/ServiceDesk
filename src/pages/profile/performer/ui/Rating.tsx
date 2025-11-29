import type { FC } from 'react';
import { Card, Rating as RatingIdicator } from '@/shared/ui';

interface RatingProps {
  rating: number;
}

export const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <Card className="p-4 rounded-xl">
      <div className="flex justify-center gap-6 text-xl font-medium text-center">
        <h2>Рейтинг</h2>
        <RatingIdicator value={rating} />
      </div>
    </Card>
  );
};
