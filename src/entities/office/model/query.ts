import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { GetOfficesArgs, Office } from './types';
import { getOffices } from '../api/office.api';

const officesKey = ['offices'];

export const useOffices = (
  args: GetOfficesArgs,
  options?: Partial<UseQueryOptions<Office[]>>
) =>
  useQuery<Office[]>({
    queryKey: [...officesKey, args.filialId, args.regionId],
    queryFn: () => getOffices(args),
    ...options,
  });
