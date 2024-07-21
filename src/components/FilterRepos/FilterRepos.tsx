// import { useSearchParams } from 'react-router-dom';
import { FilterOptions } from '../../types/enums';
import { RepoFilterLink } from '../RepoFilterLink/RepoFilterLink';
import { RepoDetails } from '../../types/interfaces';

type Props = {
  repos: RepoDetails[];
  setFilterValue: (value: FilterOptions) => void;
};

const FilterRepos: React.FC<Props> = ({ repos, setFilterValue }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  console.log(repos, 'repos in filteoptions');

  // const query = searchParams.get('query') || '';
  // console.log('FilterRepos');

  // function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const params = new URLSearchParams(searchParams);
  //   params.set('query', event.target.value);
  //   setSearchParams(params);
  // }
  return (
    <nav className="filter">
      {Object.values(FilterOptions).map(filterValue => (
        <RepoFilterLink
          key={filterValue}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        >
          {filterValue}
        </RepoFilterLink>
      ))}
    </nav>
  );
};

export default FilterRepos;
