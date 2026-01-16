import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fullfillTicket,
  rejectTicket,
  startWork,
} from '../api/change-ticket.status.api';

export const useStartWork = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (ticketId: string) => startWork(ticketId),
    onSuccess: (_, ticketId) => {
      qc.invalidateQueries({ queryKey: ['tickets'] });
      qc.invalidateQueries({ queryKey: ['ticket-history'] });
      qc.invalidateQueries({ queryKey: ['ticket', ticketId] });
    },
  });
};

export const useRejectTicket = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { ticketId: string; message: string }) =>
      rejectTicket(data),
    onSuccess: (_, data) => {
      qc.invalidateQueries({ queryKey: ['tickets'] });
      qc.invalidateQueries({ queryKey: ['ticket-history'] });
      qc.invalidateQueries({ queryKey: ['ticket', data.ticketId] });
    },
  });
};

export const useFullfillTicket = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      ticketId: string;
      message: string;
      total: number;
      photosUrl: string[];
    }) => fullfillTicket(data),
    onSuccess: (_, data) => {
      qc.invalidateQueries({ queryKey: ['tickets'] });
      qc.invalidateQueries({ queryKey: ['ticket-history'] });
      qc.invalidateQueries({ queryKey: ['ticket', data.ticketId] });
    },
  });
};
