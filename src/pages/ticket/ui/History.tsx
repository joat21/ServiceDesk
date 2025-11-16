import type { FC } from 'react';
import { Card } from '@heroui/react';
import { HistoryItem } from './HistoryItem';
import type { TicketHistoryItem } from '@/entities/ticket';

interface HistoryProps {
  history: TicketHistoryItem[];
}

export const History: FC<HistoryProps> = ({ history }) => {
  return (
    <Card className="px-7 py-5 rounded-xl max-w-2xl w-full">
      <h2 className="mb-4 text-2xl font-semibold">История выполнения</h2>
      <ul className="flex flex-col gap-9 p-0">
        {history.map((item) => (
          <li key={item.id}>
            <HistoryItem item={item} />
          </li>
        ))}
      </ul>
    </Card>
  );
};
