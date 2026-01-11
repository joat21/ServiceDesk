import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editPriorities } from '../api/edit-priorities.api';

export const useEditPriorities = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: { priorityId: number; sla: number }[]) =>
      editPriorities(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['priorities'] }),
  });
};
