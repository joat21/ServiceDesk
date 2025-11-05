import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Details';
import { History } from './History';
import { useTicket } from '@/features/tickets';

export const TicketPage: FC = () => {
  const { id = '' } = useParams();

  const { data: ticket } = useTicket(Number(id));

  return (
    <div className="flex items-start gap-5 pt-14 w-full">
      <Details ticket={ticket} />
      <History ticket={ticket} />
    </div>
  );
};
