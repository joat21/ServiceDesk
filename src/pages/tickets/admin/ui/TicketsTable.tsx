import { useMemo } from 'react';
import {
  Spinner,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@heroui/react';
import type { Ticket } from '@/entities/ticket';
import { PrioirityChip } from '@/entities/priority';
import { formatDateTime } from '@/shared/lib/dateTime';
import {
  Button,
  DeadlineChip,
  Table,
  TicketInfoCell,
  ViewButton,
} from '@/shared/ui';

const createColumns = (params: {
  onOpenAssignModal: (ticketId: string | number) => void;
}) => [
  { key: 'number', label: 'Номер' },

  {
    key: 'theme',
    label: 'Заявка',
    render: (ticket: Ticket) => <TicketInfoCell ticket={ticket} />,
  },
  {
    key: 'actions',
    label: '',
    render: (ticket: Ticket) => <ViewButton href={`/tickets/${ticket.id}`} />,
  },
  {
    key: 'priority',
    label: 'Приоритет',
    render: (ticket: Ticket) => <PrioirityChip value={ticket.priority} />,
  },
  { key: 'office', label: 'Офис' },
  {
    key: 'dueAt',
    label: 'Дедлайн',
    render: (ticket: Ticket) =>
      ticket.isExpired ? (
        <DeadlineChip deadline={ticket.dueAt} />
      ) : (
        formatDateTime(ticket.dueAt, 'numeric')
      ),
  },
  {
    key: 'performer',
    label: 'Исполнитель',
    render: (ticket: Ticket) =>
      ticket.performer ? (
        ticket.performer
      ) : (
        <Button
          variant="ghost"
          className="text-black"
          onPress={() => params.onOpenAssignModal(ticket.id)}
        >
          Назначить
        </Button>
      ),
  },
];

interface TicketsTableProps {
  tickets?: Ticket[];
  isLoading?: boolean;
  onOpenAssignModal: (ticketId: string | number) => void;
}

export const TicketsTable = ({
  tickets,
  isLoading,
  onOpenAssignModal,
}: TicketsTableProps) => {
  const columns = useMemo(
    () => createColumns({ onOpenAssignModal }),
    [onOpenAssignModal]
  );

  const columnsMap = useMemo(
    () => Object.fromEntries(columns.map((c) => [c.key, c])),
    [columns]
  );

  return (
    <Table classNames={{ base: 'mb-6' }} aria-label="Управление заявками">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={tickets ?? []}
        isLoading={isLoading}
        loadingContent={<Spinner />}
        emptyContent={'Заявки не найдены'}
      >
        {(ticket) => (
          <TableRow key={ticket.id}>
            {(columnKey) => {
              const column = columnsMap[columnKey];
              return (
                <TableCell>
                  {column.render
                    ? column.render(ticket)
                    : getKeyValue(ticket, columnKey)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
