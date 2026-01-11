import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editAnalystAssignment } from '../api/edit-analyst-assignment.api';

export const useEditAnalystAssignment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: { userId: string; filialId: number }) =>
      editAnalystAssignment(payload),
    onSuccess: () =>
      qc.invalidateQueries({ queryKey: ['analyst-assignments'] }),
  });
};
