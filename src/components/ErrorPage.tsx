import { useRouteError } from 'react-router-dom';
import { RouteError } from '../types/types';

export default function ErrorPage() {
  const error: RouteError | unknown = useRouteError();
  const typedError = error as RouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
}
