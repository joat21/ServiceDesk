import { useQuery } from '@tanstack/react-query';
import type { Priority } from './types';
import { getPriorities } from '../api/priority.api';

const prioritiesKey = ['priorities'];

export const usePriorities = () =>
  useQuery<Priority[]>({
    queryKey: prioritiesKey,
    queryFn: getPriorities,
  });
