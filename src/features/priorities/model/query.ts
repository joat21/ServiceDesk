import { useQuery } from '@tanstack/react-query';
import { getPriorities, type Priority } from '@/entities/priority';

const prioritiesKey = ['priorities'];

export const usePriorities = () =>
  useQuery<Priority[]>({
    queryKey: prioritiesKey,
    queryFn: getPriorities,
  });
