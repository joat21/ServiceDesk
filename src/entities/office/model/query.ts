import { useQuery } from '@tanstack/react-query';
import type { Office } from './types';
import { getOffices } from '../api/office.api';

const officesKey = ['offices'];

export const useOffices = () =>
  useQuery<Office[]>({
    queryKey: officesKey,
    queryFn: getOffices,
  });
