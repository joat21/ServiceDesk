import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editCategory } from '../api/edit-category.api';

export const useEditCategory = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      categoryId: number;
      name: string;
      sla: number;
      description: string;
    }) => editCategory(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['categories'] }),
  });
};
