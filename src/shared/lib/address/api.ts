import { api } from '@/shared/api/base';
import { useQuery } from '@tanstack/react-query';
import type { AddressSuggestion } from './types';

export const getAddressSuggestions = async (query: string) => {
  const { data } = await api.post(
    import.meta.env.VITE_DADATA_URL,
    { query },
    {
      withCredentials: false,
      headers: {
        Authorization: 'Token ' + import.meta.env.VITE_DADATA_API_KEY,
      },
    }
  );

  return data.suggestions;
};

export const useAddressSuggestions = (query: string) =>
  useQuery<AddressSuggestion[]>({
    queryKey: ['address', query],
    queryFn: () => getAddressSuggestions(query),
    enabled: query.length >= 3,
    staleTime: 5 * 60 * 1000,
  });
