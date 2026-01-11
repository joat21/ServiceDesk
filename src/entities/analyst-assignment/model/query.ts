import { useQuery } from '@tanstack/react-query';
import { getAnalystAssignments } from '../api/analyst-assignment.api';

export const useAnalystAssignments = () =>
  useQuery({
    queryKey: ['analyst-assignments'],
    queryFn: getAnalystAssignments,
  });
