import { useCallback, useEffect, useState } from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import { getRepos } from './api/api';
import { RepoDetails } from './types/interfaces';
import AllRepos from './components/AllRepos/AllRepos';
import Loader from './components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { ErrorTypes, FilterOptions } from './types/enums';
import FilterRepos from './components/FilterRepos/FilterRepos';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [repos, setRepos] = useState<RepoDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<string | null>(null);
  const [next, setNext] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<FilterOptions>(
    FilterOptions.BestMatch,
  );
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const handleSearch = useCallback(
    async (query: string, sort = '', newPage = 1) => {
      setIsLoading(true);
      setHasError(null);

      if (!query) {
        setRepos([]);
        setIsLoading(false);
        setHasError(null);
        return;
      }

      const params = new URLSearchParams();
      params.set('q', query);

      if (sort) {
        params.set('sort', sort);
      }

      params.set('page', newPage.toString());

      try {
        const newRepos = await getRepos(params.toString());
        const isNext = newRepos.total_count - newRepos.items.length > 0;

        setNext(isNext);

        setRepos(prevRepos =>
          newPage === 1 ? newRepos.items : [...prevRepos, ...newRepos.items],
        );

        if (newRepos.items.length === 0) {
          setHasError(ErrorTypes.NO_REPO);
        }
      } catch (err) {
        console.log(err);
        setHasError(ErrorTypes.RATE_LIMIT);
      } finally {
        setIsLoading(false);
      }
    },
    [filterValue],
  );

  useEffect(() => {
    const query = searchParams.get('query');
    const sort = searchParams.get('sort') || '';

    if (query) {
      setRepos([]);
      setPage(1);
      handleSearch(query, sort, 1);
    } else {
      setIsLoading(false);
    }
  }, [searchParams, handleSearch]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      setShowScrollToTop(scrollTop > 200);

      if (scrollTop + clientHeight >= scrollHeight - 20 && next && !isLoading) {
        setNext(false);
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [next, isLoading]);

  useEffect(() => {
    const query = searchParams.get('query');
    const sort = searchParams.get('sort') || '';

    if (query && page > 1) {
      handleSearch(query, sort, page);
    }
  }, [page, searchParams, handleSearch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  };

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
      <AllRepos repos={repos} hasError={hasError} />
      {isLoading && <Loader />}
      {showScrollToTop && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
}

export default App;
