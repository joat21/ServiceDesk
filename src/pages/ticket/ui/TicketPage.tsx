import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Details';
import { History } from './History';
import { useTicketHistory, useTicket } from '@/entities/ticket';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';
import { CreateTicketComment } from '@/features/create-ticket-comment';

export const TicketPage: FC = () => {
  const { id = '' } = useParams();

  const { data: ticket, isLoading: isTicketLoading } = useTicket(Number(id));
  const { data: history } = useTicketHistory(id);

  if (isTicketLoading) return 'Загрузка...';
  if (!ticket) return <p>Заявка не найдена</p>;

  return (
    <div className="relative flex flex-col gap-6 py-11 w-full">
      <BackToHomeButton />
      <div className="flex gap-5 items-start">
        <Details ticket={ticket} />
        <div className="flex flex-col gap-10 w-full">
          <History history={history ?? []} />
          <CreateTicketComment ticketId={ticket.id} />
        </div>
      </div>
    </div>
  );
};
