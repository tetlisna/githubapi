import styles from './SearchBar.module.scss';

import { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { getSearchWith } from '../../utils/searchHelper';

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: (searchParams: URLSearchParams) => void;
};

const SearchBar: React.FC<Props> = ({ searchParams, setSearchParams }) => {
  const initialQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchParams(new URLSearchParams({}));
    } else {
      const updatedParams = getSearchWith(searchParams, {
        query: debouncedQuery,
      });
      setSearchParams(new URLSearchParams(updatedParams));
    }
  }, [debouncedQuery, searchParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <label className={styles.search__label}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Enter a title to search"
        onChange={handleInputChange}
        value={query}
      />
    </label>
  );
};

export default SearchBar;
