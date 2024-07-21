import styles from './AllRepos.module.scss';
import { RepoDetails } from '../../types/interfaces';
import ProfileCard from '../ProfileCard/ProfileCard';

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
          <h3 className={styles.title}>Top Repositories</h3>
          {repos.map(repo => (
            <ProfileCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      {/* {!isLoading && repos.length === 0 && <p>No repositories found</p>} */}
    </div>
  );
};

export default AllRepos;
