import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory } from '../api/create-category.api';

export const useCreateCategory = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: { name: string; sla: number; description: string }) =>
      createCategory(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['categories'] }),
  });
};
