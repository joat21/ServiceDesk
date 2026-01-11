import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editAdminAssignment } from '../api/edit-admin-assignment.api';

export const useEditAdminAssignment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: { userId: string; regionId: number }) =>
      editAdminAssignment(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-assignments'] }),
  });
};
