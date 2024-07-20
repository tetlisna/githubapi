export type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type RouteError = {
  statusText?: string | undefined;
  message?: string | undefined;
};
