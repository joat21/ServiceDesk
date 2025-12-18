import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOffice } from '../api/create-office.api';

export const useCreateOffice = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { city: string; address: string }) => createOffice(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['offices'] }),
  });
};
