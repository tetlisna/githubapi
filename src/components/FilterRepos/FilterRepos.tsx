import { FilterOptions } from '../../types/enums';
import { RepoFilterLink } from '../RepoFilterLink/RepoFilterLink';
import { RepoDetails } from '../../types/interfaces';
import styles from './FilterRepos.module.scss';

type Props = {
  searchParams: URLSearchParams;
  repos: RepoDetails[];
  setFilterValue: (value: FilterOptions) => void;
};

const FilterRepos: React.FC<Props> = ({ setFilterValue }) => {
  return (
    <nav className={styles.filter}>
      {Object.values(FilterOptions).map(filterValue => (
        <RepoFilterLink
          key={filterValue}
          params={{ sort: filterValue }}
          onClick={() => setFilterValue(filterValue)}
        >
          {filterValue}
        </RepoFilterLink>
      ))}
    </nav>
  );
};

export default FilterRepos;
