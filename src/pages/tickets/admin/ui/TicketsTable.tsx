import type { Ticket } from '@/entities/ticket';
import { TicketInfoCell } from '../../performer/ui/TicketInfoCell';
import { PrioirityChip } from '@/entities/priority';
import { Button } from '@/shared/ui';
import {
  getKeyValue,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { ViewIcon } from '@/shared/ui/icons';
import { formatDate } from '@/shared/lib/dateTime';
import { useMemo } from 'react';

const createColumns = (params: {
  onOpenAssignModal: (ticketId: string | number) => void;
}) => [
  { key: 'number', label: 'Номер' },

  {
    key: 'theme',
    label: 'Заявка',
    render: (ticket: Ticket) => <TicketInfoCell ticket={ticket} />,
  },

  { key: 'actions', label: '' },

  {
    key: 'priority',
    label: 'Приоритет',
    render: (ticket: Ticket) => <PrioirityChip value={ticket.priority} />,
  },

  { key: 'deadline', label: 'Дедлайн' },

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
  tickets: Ticket[];
  onOpenAssignModal: (ticketId: string | number) => void;
}

export const TicketsTable = ({
  tickets,
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

  const rows = tickets.map((ticket) => ({ key: ticket.id, ...ticket }));

  return (
    <Table
      classNames={{
        wrapper: 'p-0 border border-[#c3c0c0] rounded-xl',
      }}
      aria-label="Мои заявки"
    >
      <TableHeader columns={columns} className="">
        {(column) => (
          <TableColumn
            key={column.key}
            className="py-3 text-lg font-medium bg-transparent"
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows} emptyContent={'Заявки не найдены'}>
        {(item) => (
          <TableRow key={item.key} className="border-t border-[#c3c0c0]">
            {/* TODO: стремно выглядит, переписать */}
            {(columnKey) => {
              const column = columnsMap[columnKey];
              return (
                <TableCell className="px-4 py-2 text-base">
                  {columnKey === 'actions' && (
                    <Button
                      variant="light"
                      as={Link}
                      href={`/tickets/${item.key}`}
                      className="p-2 rounded-lg min-w-0 w-fit"
                    >
                      <ViewIcon />
                    </Button>
                  )}
                  {columnKey === 'deadline'
                    ? formatDate(getKeyValue(item, columnKey))
                    : column?.render
                      ? column.render(item)
                      : getKeyValue(item, columnKey)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
