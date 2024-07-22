import styles from './RepoFilterLink.module.scss';
import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { getSearchWith, SearchParams } from '../../utils/searchHelper';

type Props = Omit<LinkProps, 'to'> & {
  params: SearchParams;
};

export const RepoFilterLink: React.FC<Props> = ({
  params,
  children,
  ...props
}) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      className={styles.filterLink}
      {...props}
    >
      {children}
    </Link>
  );
};
