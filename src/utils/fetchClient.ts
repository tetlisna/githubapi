import { RequestMethod } from '../types/types';

const BASE_URL = import.meta.env.VITE_API_URL;
const token = import.meta.env.REACT_APP_GITHUB_TOKEN;

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: unknown = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return Promise.resolve()
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      const data = response.json();
      return data;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
