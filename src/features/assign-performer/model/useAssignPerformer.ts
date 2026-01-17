import { useMutation, useQueryClient } from '@tanstack/react-query';
import { assignPerformer } from '../api/assign-performer.api';

export const useAssignPerformer = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      ticketId: string;
      userId: string;
      categoryId: string;
    }) => assignPerformer(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tickets'] }),
  });
};
