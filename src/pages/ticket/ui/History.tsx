import type { FC } from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import type { Ticket } from '@/entities/ticket';

interface HistoryProps {
  ticket?: Ticket;
}

export const History: FC<HistoryProps> = ({ ticket }) => {
  return (
    <Card className="px-7 py-5 rounded-xl max-w-2xl w-full">
      <CardHeader className="mb-4 p-0">
        <h2 className="text-2xl font-semibold">История выполнения</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 p-0">
        <div className="flex justify-between">
          <span>Заявка создана</span>
          <span>
            {new Date(ticket?.createdAt ?? '').toLocaleDateString()}{' '}
            {new Date(ticket?.createdAt ?? '').toLocaleTimeString()}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
