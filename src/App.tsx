import { useCallback, useState } from 'react';
import './App.scss';
// import './testdata.json';

import SearchBar from './components/SearchBar/SearchBar';
import { getRepos } from './api/api';
import { RepoDetails } from './types/interfaces';
import AllRepos from './components/AllRepos/AllRepos';
import Loader from './components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import FilterRepos from './components/FilterRepos/FilterRepos';
import { FilterOptions } from './types/enums';

function App() {
  const [repos, setRepos] = useState<RepoDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<FilterOptions>(
    FilterOptions.BestMatch,
  );

  const { pathname, search } = useLocation();
  console.log({ pathname }, { search }, 'pathname');

  const handleSearch = useCallback(
    async (query: string) => {
      setIsLoading(true);

      setHasError(null);

      if (!query) {
        setIsLoading(false);
        return;
      }

      try {
        const repos = await getRepos(`q=${query}&sort=${filterValue}`);
        // const repos = await getRepos(`q=${query}`);
        console.log(repos);

        setRepos(repos.items);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }

      setIsLoading(false);
    },
    [filterValue, setFilterValue],
  );

  return (
    <div className="main-content">
      <FilterRepos setFilterValue={setFilterValue} repos={repos} />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && (
        <AllRepos repos={repos} isLoading={isLoading} hasError={hasError} />
      )}
    </div>
  );
}

export default App;
