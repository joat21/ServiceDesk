import { useQuery } from '@tanstack/react-query';
import { getAdminAssignments } from '../api/admin-assignment.api';

export const useAdminAssignments = () =>
  useQuery({
    queryKey: ['admin-assignments'],
    queryFn: getAdminAssignments,
  });
