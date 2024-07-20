import styles from './SearchBar.module.scss';

import { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

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
