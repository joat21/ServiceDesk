import { useState, type FC } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
  Select,
  SelectItem,
} from '@heroui/react';
import { TicketsTable } from './TicketsTable';
import { useTickets } from '@/features/tickets';
import { usePriorities } from '@/features/priorities';
import type { TicketsFilter } from '@/entities/ticket';

const statuses = [
  { id: 1, name: 'На рассмотрении' },
  { id: 2, name: 'Принято в работу' },
  { id: 3, name: 'Передано подрядчику' },
  { id: 4, name: 'Отклонено' },
  { id: 5, name: 'Выполнено' },
];

const deadlineOptions = [
  { id: 1, name: 'Просроченные' },
  { id: 2, name: 'Сегодня' },
  { id: 3, name: 'Завтра' },
  { id: 4, name: 'На этой неделе' },
];

export const TicketsPage: FC = () => {
  const [filters, setFilters] = useState<TicketsFilter>({
    search: '',
    priorityId: null,
    statusId: null,
    deadline: null,
  });

  const { data: tickets } = useTickets(filters);
  const { data: priorities } = usePriorities();

  return (
    <div className="flex flex-col items-center pt-11 w-full">
      <div className="flex justify-between w-full">
        <h2>Мои заявки</h2>
        <Link href="/create-ticket">+ Создать заявку</Link>
      </div>
      <Card className="px-4 py-5 rounded-xl w-full">
        <CardHeader className="p-0">
          <h1 className="text-2xl font-semibold">История заявок</h1>
        </CardHeader>
        <CardBody className="p-0">
          <div className="flex justify-between gap-5 mb-5">
            <Input
              placeholder="Поиск по заявкам"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
            />
            <Select
              aria-label="Приоритет"
              placeholder="Все приоритеты"
              items={priorities ?? []}
              selectedKeys={
                filters.priorityId ? [String(filters.priorityId)] : []
              }
              onSelectionChange={(keys) => {
                const id = Number(Array.from(keys)[0]);
                setFilters((prev) => ({
                  ...prev,
                  priorityId: Number.isNaN(id) ? null : id,
                }));
              }}
            >
              {(priority) => (
                <SelectItem key={priority.id}>{priority.name}</SelectItem>
              )}
            </Select>
            <Select
              aria-label="Статус"
              placeholder="Все статусы"
              items={statuses}
              selectedKeys={filters.statusId ? [String(filters.statusId)] : []}
              onSelectionChange={(keys) => {
                const id = Number(Array.from(keys)[0]);
                setFilters((prev) => ({
                  ...prev,
                  statusId: Number.isNaN(id) ? null : id,
                }));
              }}
            >
              {(status) => (
                <SelectItem key={status.id}>{status.name}</SelectItem>
              )}
            </Select>
            <Select
              aria-label="Дедлайн"
              placeholder="Дедлайн"
              items={deadlineOptions}
              selectedKeys={filters.deadline ? [filters.deadline] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] as string;
                setFilters((prev) => ({ ...prev, deadline: value ?? null }));
              }}
            >
              {(option) => (
                <SelectItem key={option.id}>{option.name}</SelectItem>
              )}
            </Select>
          </div>
          <TicketsTable tickets={tickets ?? []} />
        </CardBody>
      </Card>
    </div>
  );
};
