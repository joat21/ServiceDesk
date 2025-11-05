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

const rows = [
  {
    key: '1',
    number: 'TK-0001',
    title: 'Ремонт кондиционера в офисе',
    priority: 'Низкий',
    status: 'Принято в работу',
    deadline: '10.12.25',
  },
  {
    key: '2',
    number: 'TK-0002',
    title: 'Ремонт кондиционера в офисе',
    priority: 'Средний',
    status: 'На рассмотрении',
    deadline: '10.12.25',
  },
  {
    key: '3',
    number: 'TK-0003',
    title: 'Ремонт кондиционера в офисе',
    priority: 'Высокий',
    status: 'Принято в работу',
    deadline: '10.12.25',
  },
  {
    key: '4',
    number: 'TK-0004',
    title: 'Ремонт кондиционера в офисе',
    priority: 'Срочный',
    status: 'Выполнено',
    deadline: '10.12.25',
  },
];

const columns = [
  {
    key: 'number',
    label: 'Номер',
  },
  {
    key: 'title',
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

export const TicketsTable: FC = () => {
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
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} href={`/ticket/${item.key}`}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
