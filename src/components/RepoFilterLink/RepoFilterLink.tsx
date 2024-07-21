import { useCallback } from 'react';
import { FilterOptions } from '../../types/enums';
import styles from './RepoFilterLink.module.scss';

type Props = {
  filterValue: FilterOptions;
  setFilterValue: (value: FilterOptions) => void;
  children: React.ReactNode;
};

export const RepoFilterLink: React.FC<Props> = ({
  filterValue,
  setFilterValue,
  children,
}) => {
  const handleClickFilter = useCallback(() => {
    setFilterValue(filterValue);
  }, [filterValue]);

  return (
    <a
      key={filterValue}
      href="#"
      className={styles.filterLink}
      onClick={handleClickFilter}
    >
      {children}
    </a>
  );
};
