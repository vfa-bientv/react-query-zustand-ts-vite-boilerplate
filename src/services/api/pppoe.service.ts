import { api } from '@/lib/api';
import { type GetPPPoEProps, type GetPPPoEResponse } from '@/types/pppoe';

export const getPPPoeById = async (
  params: GetPPPoEProps
): Promise<GetPPPoEResponse> => {
  const { url, ...rest } = params;
  try {
    const response = await api.get<GetPPPoEResponse>(`${url}/proxy-list`, {
      params: { ...rest },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
