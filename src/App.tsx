import { useCallback, useEffect, useState } from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import { getRepos } from './api/api';
import { RepoDetails } from './types/interfaces';
import AllRepos from './components/AllRepos/AllRepos';
import Loader from './components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { FilterOptions } from './types/enums';
import FilterRepos from './components/FilterRepos/FilterRepos';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [repos, setRepos] = useState<RepoDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<FilterOptions>(
    FilterOptions.BestMatch,
  );

  const handleSearch = useCallback(
    async (query: string, sort = '') => {
      setIsLoading(true);
      setHasError(null);

      if (!query) {
        setRepos([]);
        setIsLoading(false);
        return;
      }

      const params = new URLSearchParams();
      params.set('q', query);

      if (sort) {
        params.set('sort', sort);
      }

      try {
        const repos = await getRepos(params.toString());

        setRepos(repos.items);
      } catch (err) {
        console.log(err);
        setHasError('Failed to fetch repositories.');
      } finally {
        setIsLoading(false);
      }

      setIsLoading(false);
    },
    [filterValue],
  );

  useEffect(() => {
    const query = searchParams.get('query');
    const sort = searchParams.get('sort') || '';

    if (query) {
      handleSearch(query, sort);
    } else {
      setIsLoading(false);
    }
  }, [searchParams, handleSearch]);

  return (
    <div className="main-content">
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <FilterRepos
        searchParams={searchParams}
        setFilterValue={setFilterValue}
        repos={repos}
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <AllRepos repos={repos} isLoading={isLoading} hasError={hasError} />
      )}
    </div>
  );
}

export default App;
