// import styles from './RepoFilterLink.module.scss';
// import { Link, LinkProps, useSearchParams  } from "react-router-dom";
// import { getSearchWith, SearchParams } from '../../utils/searchHelper';

// // type LinkProps = {
// //   filterValue: FilterOptions;
// //   setFilterValue: (value: FilterOptions) => void;
// //   children: React.ReactNode;
// // };
// type Props = Omit<LinkProps, 'to'> & {
//   params: SearchParams;
// };

// export const RepoFilterLink: React.FC<Props> = ({
//   params,
//   children,
//   ...props
// }) => {

//   const [searchParams] = useSearchParams();

//   return (
//     <Link to={{
//       search: getSearchWith(searchParams, params),
//     }}
//        className={styles.filterLink}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };
import { FilterOptions } from '../../types/enums';
import styles from './RepoFilterLink.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  filterValue: FilterOptions;
  setFilterValue: (value: FilterOptions) => void;
  searchParams: URLSearchParams;
};

export const RepoFilterLink: React.FC<Props> = ({
  filterValue,
  searchParams,
  children,
}) => {
  const query = searchParams.get('query') || '';

  const params = new URLSearchParams();

  if (query) {
    params.set('query', query);
  }

  if (FilterOptions.BestMatch !== filterValue) {
    params.set('sort', filterValue);
  }

  console.log(params.toString(), 'params.toString()');

  const to = params.toString() ? `?${params.toString()}` : '/';

  return (
    <Link to={to} className={styles.filterLink}>
      {children}
    </Link>
  );
};
