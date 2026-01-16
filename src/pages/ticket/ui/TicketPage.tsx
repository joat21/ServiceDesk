import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Details';
import { History } from './History';
import { CreateTicketComment } from '@/features/create-ticket-comment';
import { useTicketHistory, useTicket } from '@/entities/ticket';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';
import { PageLoader } from '@/shared/ui';
import { ChangeTicketStatus } from '@/features/change-ticket-status';
import { Role, useAuthUser } from '@/entities/user';
import { STATUS_ENUM } from '@/entities/status';

export const TicketPage: FC = () => {
  const { id = '' } = useParams();
  const user = useAuthUser();

  const { data: ticket, isLoading: isTicketLoading } = useTicket(id);
  const { data: history } = useTicketHistory(id);

  if (isTicketLoading) return <PageLoader />;
  if (!ticket) return <p>Заявка не найдена</p>;

  return (
    <div className="relative flex flex-col gap-6 py-11 w-full">
      <BackToHomeButton />
      <div className="flex gap-5 items-start">
        <div className="sticky top-5 flex flex-col gap-10 w-full">
          <Details ticket={ticket} />
          {user.roleName === Role.Performer &&
            ticket.status !== STATUS_ENUM.Completed &&
            ticket.status !== STATUS_ENUM.Rejected && (
              <ChangeTicketStatus ticketId={ticket.id} status={ticket.status} />
            )}
        </div>

        <div className="flex flex-col gap-10 w-full">
          <History history={history ?? []} />
          {/* выглядит конечно отвратительно, но кому щас легко? */}
          {(user.roleName === Role.Employee ||
            user.roleName === Role.Performer ||
            user.roleName === Role.Admin) &&
            ticket.status !== STATUS_ENUM.Completed &&
            ticket.status !== STATUS_ENUM.Rejected && (
              <CreateTicketComment ticketId={ticket.id} />
            )}
        </div>
      </div>
    </div>
  );
};
