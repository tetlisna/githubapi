import { useNavigate, useRouteError } from 'react-router-dom';
import { RouteError } from '../../types/types';
import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  const error: RouteError | unknown = useRouteError();
  const typedError = error as RouteError;
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <div className={styles.errorPage}>
        <img
          src="assets/Image404.jpg"
          alt="Error"
          className={styles.errorImage}
        />
        <h1 className={styles.errorMessage}>Wrong page</h1>
        <button onClick={() => navigate(-1)} className={styles.errorBtn}>
          Go Back
        </button>
      </div>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
}
