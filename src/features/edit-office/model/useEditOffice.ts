import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editOffice } from '../api/edit-office.api';

export const useEditOffice = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { officeId: string; city: string; address: string }) =>
      editOffice(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['offices'] }),
  });
};
