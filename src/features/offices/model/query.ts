import { useQuery } from '@tanstack/react-query';
import { getOffices, type Office } from '@/entities/office';

const officesKey = ['offices'];

export const useOffices = () =>
  useQuery<Office[]>({
    queryKey: officesKey,
    queryFn: getOffices,
  });
