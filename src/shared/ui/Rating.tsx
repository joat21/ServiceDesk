import { StarIcon } from './icons';

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  return (
    <span className="flex gap-1 text-xl font-medium">
      <StarIcon />
      <span>{value}</span>
    </span>
  );
};
