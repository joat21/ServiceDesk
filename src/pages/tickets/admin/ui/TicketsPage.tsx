import { useState } from 'react';
import { useDisclosure } from '@heroui/react';
import { TicketsTable } from './TicketsTable';
import { TicketsFilters } from './TicketsFilters';
import { AssignPerformerModal } from '@/features/assign-performer';
import { usePriorities } from '@/entities/priority';
import { useTickets, type TicketsFilter } from '@/entities/ticket';
import { Card } from '@/shared/ui';

export const TicketsPage = () => {
  const [filters, setFilters] = useState<TicketsFilter>({
    search: '',
    priorityId: null,
    statusId: null,
    dueAt: null,
  });

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [assignTicketId, setAssignTicketId] = useState<string | number | null>(
    null
  );
  const { data: tickets, isFetching } = useTickets(filters);
  const { data: priorities } = usePriorities();

  const handleAssignPerformer = (ticketId: string | number) => {
    setAssignTicketId(ticketId);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
        <h1 className="mb-7 text-2xl font-semibold">Управление заявками</h1>
        <TicketsFilters
          priorities={priorities}
          filters={filters}
          setFilters={setFilters}
        />
        <TicketsTable
          tickets={tickets?.content}
          isLoading={isFetching}
          onOpenAssignModal={handleAssignPerformer}
        />
      </Card>

      <AssignPerformerModal
        ticketId={assignTicketId ?? ''}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
