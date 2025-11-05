import type { FC } from 'react';
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import type { Ticket } from '@/entities/ticket';

const columns = [
  {
    key: 'number',
    label: 'Номер',
  },
  {
    key: 'theme',
    label: 'Заявка',
  },
  {
    key: 'priority',
    label: 'Приоритет',
  },
  {
    key: 'status',
    label: 'Статус',
  },
  {
    key: 'deadline',
    label: 'Дедлайн',
  },
];

interface TicketsTableProps {
  tickets: Ticket[];
}

export const TicketsTable: FC<TicketsTableProps> = ({ tickets }) => {
  const rows = tickets.map((ticket) => ({ key: ticket.id, ...ticket }));

  return (
    <Table
      classNames={{
        wrapper: 'rounded-xl',
      }}
      aria-label="История заявок"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={'No rows to display.'}>
        {(item) => (
          <TableRow key={item.key} href={`/tickets/${item.key}`}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
