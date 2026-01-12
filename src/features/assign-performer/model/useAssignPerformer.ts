import { useMutation, useQueryClient } from '@tanstack/react-query';
import { assignPerformer } from '../api/assign-performer.api';

export const useAssignPerformer = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: assignPerformer,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tickets'] }),
  });
};
