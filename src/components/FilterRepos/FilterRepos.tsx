import { FilterOptions } from '../../types/enums';
import { RepoFilterLink } from '../RepoFilterLink/RepoFilterLink';
import { RepoDetails } from '../../types/interfaces';
import styles from './FilterRepos.module.scss';

type Props = {
  searchParams: URLSearchParams;
  repos: RepoDetails[];
  setFilterValue: (value: FilterOptions) => void;
};

const FilterRepos: React.FC<Props> = ({ setFilterValue, searchParams }) => {
  console.log('repos in filteoptions');

  return (
    <nav className={styles.filter}>
      {Object.values(FilterOptions).map(filterValue => (
        <RepoFilterLink
          key={filterValue}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          searchParams={searchParams}
        >
          {filterValue}
        </RepoFilterLink>
      ))}
    </nav>
  );
};

export default FilterRepos;
