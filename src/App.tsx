import { useState } from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import { getRepos } from './api/api';
import { RepoDetails } from './types/interfaces';
import AllRepos from './components/AllRepos/AllRepos';
import { Loader } from './components/Loader';

function App() {
  const [repos, setRepos] = useState<RepoDetails[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    console.log('in handleSearch', query);

    setIsLoading(true);

    setHasError(null);
    try {
      const repos = await getRepos(`q=${query}`);
      console.log(repos);

      setRepos(repos.items);
    } catch (err) {
      setHasError('Failed to fetch repositories');
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="main-content">
      <SearchBar onSearch={handleSearch} />
      {hasError && <p>Cant find repository</p>}
      {isLoading && <Loader />}
      {!isLoading && (
        <AllRepos repos={repos} isLoading={isLoading} hasError={hasError} />
      )}
    </div>
  );
}

export default App;
