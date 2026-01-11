import type { FC } from 'react';
import { SelectItem } from '@heroui/react';
import type { Priority } from '@/entities/priority';
import type { TicketsFilter } from '@/entities/ticket';
import { Input, Select } from '@/shared/ui';
import { FilterIcon, SearchIcon } from '@/shared/ui/icons';

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

interface TicketsFiltersProps {
  priorities: Priority[] | undefined;
  filters: TicketsFilter;
  setFilters: React.Dispatch<React.SetStateAction<TicketsFilter>>;
}

export const TicketsFilters: FC<TicketsFiltersProps> = ({
  priorities,
  filters,
  setFilters,
}) => {
  return (
    <div className="flex justify-between gap-5 mb-6">
      <Input
        placeholder="Поиск по заявкам..."
        value={filters.search}
        classNames={{
          base: 'max-w-56 min-h-8 h-8',
          inputWrapper: 'min-h-8 h-8',
        }}
        startContent={<SearchIcon />}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <Select
        aria-label="Приоритет"
        placeholder="Все приоритеты"
        items={priorities ?? []}
        classNames={{
          base: 'max-w-56 min-h-8 h-8',
          trigger: 'min-h-8 h-8',
          value: 'text-[#666] text-base',
        }}
        startContent={<FilterIcon />}
        selectedKeys={filters.priorityId ? [String(filters.priorityId)] : []}
        onSelectionChange={(keys) => {
          const id = Number(Array.from(keys)[0]);
          setFilters((prev) => ({
            ...prev,
            priorityId: Number.isNaN(id) ? null : id,
          }));
        }}
      >
        {(priority) => (
          <SelectItem key={priority.priorityId}>{priority.name}</SelectItem>
        )}
      </Select>
      <Select
        aria-label="Статус"
        placeholder="Все статусы"
        items={statuses}
        classNames={{
          base: 'max-w-56 min-h-8 h-8',
          trigger: 'min-h-8 h-8',
          value: 'text-[#666] text-base',
        }}
        startContent={<FilterIcon />}
        selectedKeys={filters.statusId ? [String(filters.statusId)] : []}
        onSelectionChange={(keys) => {
          const id = Number(Array.from(keys)[0]);
          setFilters((prev) => ({
            ...prev,
            statusId: Number.isNaN(id) ? null : id,
          }));
        }}
      >
        {(status) => <SelectItem key={status.id}>{status.name}</SelectItem>}
      </Select>
      <Select
        aria-label="Дедлайн"
        placeholder="Дедлайн"
        items={deadlineOptions}
        classNames={{
          base: 'max-w-56 min-h-8 h-8',
          trigger: 'min-h-8 h-8',
          value: 'text-[#666] text-base',
        }}
        startContent={<FilterIcon />}
        selectedKeys={filters.deadline ? [filters.deadline] : []}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as string;
          setFilters((prev) => ({ ...prev, deadline: value ?? null }));
        }}
      >
        {(deadlineOption) => (
          <SelectItem key={deadlineOption.id}>{deadlineOption.name}</SelectItem>
        )}
      </Select>
    </div>
  );
};
