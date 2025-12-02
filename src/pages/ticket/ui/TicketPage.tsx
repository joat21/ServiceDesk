import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Details';
import { History } from './History';
import { useTicket } from '@/features/tickets';
import { useTicketHistory } from '@/entities/ticket';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';

export const TicketPage: FC = () => {
  const { id = '' } = useParams();

  const { data: ticket, isLoading: isTicketLoading } = useTicket(Number(id));
  const { data: history } = useTicketHistory(id);

  if (isTicketLoading) return 'Загрузка...';
  if (!ticket) return <p>Заявка не найдена</p>;

  return (
    <div className="relative flex flex-col gap-6 py-11 w-full">
      {/* TODO: в зависимости от роли менять роут, на который делать редирект */}
      <BackToHomeButton />
      <div className="flex gap-5 items-start">
        <Details ticket={ticket} />
        <History history={history ?? []} />
      </div>
    </div>
  );
};
