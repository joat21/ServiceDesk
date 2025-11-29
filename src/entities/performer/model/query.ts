import { useQuery } from '@tanstack/react-query';
import { getPerformers } from '../api/performer.api';

export const usePerformers = () =>
  useQuery({
    queryKey: ['performers'],
    queryFn: () => getPerformers(),
  });
