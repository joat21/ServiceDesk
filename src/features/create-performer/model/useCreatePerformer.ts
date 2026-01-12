import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createPerformer,
  type CreatePerformerArgs,
} from '../api/create-performer.api';

export const useCreatePerformer = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreatePerformerArgs) => createPerformer(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['performers'] }),
  });
};
