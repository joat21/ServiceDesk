import { useQuery } from '@tanstack/react-query';
import type { Status } from './types';
import { getStatuses } from '../api/status.api';

export const useStatuses = () =>
  useQuery<Status[]>({ queryKey: ['statuses'], queryFn: getStatuses });
