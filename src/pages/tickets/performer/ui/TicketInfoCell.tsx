import type { FC } from 'react';
import type { Ticket } from '@/entities/ticket';
import { MapPinIcon } from '@/shared/ui/icons';

interface TicketInfoCellProps {
  ticket: Ticket;
}

export const TicketInfoCell: FC<TicketInfoCellProps> = ({ ticket }) => {
  return (
    <div className="flex flex-col gap-2.5 py-1.5 max-w-[420px]">
      <span className="font-medium truncate">{ticket.theme}</span>
      <span className="truncate">{ticket.description}</span>
      <div className="flex gap-2.5">
        <MapPinIcon width={24} height={24} />
        <span className="truncate">{ticket.office}</span>
      </div>
    </div>
  );
};
