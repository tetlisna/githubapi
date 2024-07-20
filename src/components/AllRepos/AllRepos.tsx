import styles from './AllRepos.module.scss';
import { RepoDetails } from '../../types/interfaces';

type Props = {
  repos: RepoDetails[];
  isLoading: boolean;
  hasError: string | null;
};

const AllRepos: React.FC<Props> = ({ repos, isLoading, hasError }) => {
  console.log('in AllRepos', repos);
  return (
    <div className={styles.allRepos}>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{hasError}</p>}
      {!isLoading && repos.length > 0 && (
        <div className={styles.reposList}>
          <h3>Top Repositories</h3>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>{' '}
                by {repo.owner.login}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isLoading && repos.length === 0 && <p>No repositories found</p>}
    </div>
  );
};

export default AllRepos;
