import type { FC } from 'react';
import {
  Spinner,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  getKeyValue,
} from '@heroui/react';
import { PrioirityChip } from '@/entities/priority';
import { STATUS_ENUM, StatusChip } from '@/entities/status';
import type { Ticket } from '@/entities/ticket';
import { formatDateTime } from '@/shared/lib/dateTime';
import { Table, ViewButton, DeadlineChip, TicketInfoCell } from '@/shared/ui';

const columns = [
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
  {
    key: 'status',
    label: 'Статус',
    render: (ticket: Ticket) => <StatusChip value={ticket.status} />,
  },
  {
    key: 'dueAt',
    label: 'Дедлайн',
    render: (ticket: Ticket) =>
      ticket.isExpired &&
      ticket.status !== STATUS_ENUM.Completed &&
      ticket.status !== STATUS_ENUM.Rejected ? (
        <DeadlineChip deadline={ticket.dueAt} />
      ) : (
        formatDateTime(ticket.dueAt, 'numeric')
      ),
  },
];

const columnsMap = Object.fromEntries(columns.map((c) => [c.key, c]));

interface TicketsTableProps {
  tickets?: Ticket[];
  isLoading?: boolean;
}

export const TicketsTable: FC<TicketsTableProps> = ({ tickets, isLoading }) => {
  return (
    <Table classNames={{ base: 'mb-6' }} aria-label="Мои заявки">
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
