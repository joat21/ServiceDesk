import { formatDateTime } from '../lib/dateTime';

export const DeadlineChip = ({ deadline }: { deadline: string }) => {
  return (
    <span className="px-1.5 py-1 border-2 border-primary rounded-lg text-primary font-medium">
      {formatDateTime(deadline, 'numeric')}
    </span>
  );
};
