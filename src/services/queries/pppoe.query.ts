import { type GetPPPoEProps } from '@/types/pppoe';
import { useQuery } from '@tanstack/react-query';
import { getPPPoeById } from '../api/pppoe.service';

export const usePPPoEQuery = (params: GetPPPoEProps) =>
  useQuery({
    queryKey: ['pppoe', params],
    queryFn: async () => await getPPPoeById(params),
  });
