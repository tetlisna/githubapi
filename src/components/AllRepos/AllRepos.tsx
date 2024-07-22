import styles from './AllRepos.module.scss';
import { RepoDetails } from '../../types/interfaces';
import ProfileCard from '../ProfileCard/ProfileCard';

type Props = {
  repos: RepoDetails[];
  isLoading: boolean;
  hasError: string | null;
};

const AllRepos: React.FC<Props> = ({ repos, isLoading, hasError }) => {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{hasError}</p>}
      <h3 className={styles.title}>Top Repositories</h3>
      {!isLoading && repos.length > 0 && (
        <div className={styles.reposList}>
          {repos.map(repo => (
            <ProfileCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      {!isLoading && repos.length === 0 && <p>No repositories found</p>}
    </div>
  );
};

export default AllRepos;
