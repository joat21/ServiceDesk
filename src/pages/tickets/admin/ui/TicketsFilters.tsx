import { useEffect, useState, type FC } from 'react';
import { SelectItem } from '@heroui/react';
import { PRIORITY_LABELS, type Priority } from '@/entities/priority';
import type { TicketsFilter } from '@/entities/ticket';
import { Input, Select } from '@/shared/ui';
import { FilterIcon, SearchIcon } from '@/shared/ui/icons';
import { useDebounce } from '@/shared/lib/useDebounce';

const deadlineOptions = [
  { key: 'asc', name: 'Ближайший срок' },
  { key: 'desc', name: 'Дальний срок' },
];

interface TicketsFiltersProps {
  priorities?: Priority[];
  filters: TicketsFilter;
  setFilters: React.Dispatch<React.SetStateAction<TicketsFilter>>;
}

export const TicketsFilters: FC<TicketsFiltersProps> = ({
  priorities,
  filters,
  setFilters,
}) => {
  const [search, setSearch] = useState(filters.search);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: debouncedSearch,
    }));
  }, [debouncedSearch, setFilters]);

  return (
    <div className="flex flex-wrap gap-10 mb-6">
      <Input
        placeholder="Поиск по заявкам..."
        value={search}
        classNames={{
          base: 'max-w-56 min-h-8 h-8',
          inputWrapper: 'min-h-8 h-8',
        }}
        startContent={<SearchIcon />}
        onChange={(e) => setSearch(e.target.value)}
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
          <SelectItem key={priority.priorityId}>
            {PRIORITY_LABELS[priority.name]}
          </SelectItem>
        )}
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
        selectedKeys={filters.dueAt ? [filters.dueAt] : []}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as string;
          setFilters((prev) => ({ ...prev, dueAt: value ?? null }));
        }}
      >
        {(deadlineOption) => (
          <SelectItem key={deadlineOption.key}>
            {deadlineOption.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};
