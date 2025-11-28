import type { FC } from 'react';
import {
  Button,
  getKeyValue,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { TicketInfoCell } from './TicketInfoCell';
import type { Ticket } from '@/entities/ticket';
import { ViewIcon } from '@/shared/ui/icons';
import { formatDate } from '@/shared/lib/dateTime';

const columns = [
  { key: 'number', label: 'Номер' },
  {
    key: 'theme',
    label: 'Заявка',
    render: (ticket: Ticket) => <TicketInfoCell ticket={ticket} />,
  },

  { key: 'actions', label: '' },

  { key: 'priority', label: 'Приоритет' },
  { key: 'status', label: 'Статус' },
  { key: 'deadline', label: 'Дедлайн' },
];

const columnsMap = Object.fromEntries(columns.map((c) => [c.key, c]));

interface MyTicketsTableProps {
  tickets: Ticket[];
}

export const MyTicketsTable: FC<MyTicketsTableProps> = ({ tickets }) => {
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
