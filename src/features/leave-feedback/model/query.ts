import { useMutation, useQueryClient } from '@tanstack/react-query';
import { leaveFeedback } from '../api/leave-feedback.api';

export const useLeaveFeedback = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { ticketId: string; rating: number; message: string }) =>
      leaveFeedback(data),
    onSuccess: (_, data) => {
      qc.invalidateQueries({ queryKey: ['ticket', data.ticketId] });
      qc.invalidateQueries({ queryKey: ['ticket-history', data.ticketId] });
    },
  });
};
