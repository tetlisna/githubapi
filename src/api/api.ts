import { DataResponse } from '../types/interfaces';
import { client } from '../utils/fetchClient';

export const getRepos = (query: string): Promise<DataResponse> => {
  return client.get<DataResponse>(`/search/repositories?${query}`);
};
