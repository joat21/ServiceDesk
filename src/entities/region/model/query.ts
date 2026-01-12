import { useQuery } from '@tanstack/react-query';
import { getRegions } from '../api/region.api';

export const useRegions = () =>
  useQuery({
    queryKey: ['regions'],
    queryFn: getRegions,
  });
