import styles from './SearchBar.module.scss';

import { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';

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
      const params = new URLSearchParams();
      params.set('query', debouncedQuery);

      if (searchParams.get('sort')) {
        params.set('sort', searchParams.get('sort')!);
      }

      setSearchParams(params);

      setSearchParams(new URLSearchParams(params));
    }
  }, [debouncedQuery, setSearchParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('in handleInputChange');

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
