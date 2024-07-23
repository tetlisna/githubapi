import styles from './AllRepos.module.scss';
import { RepoDetails } from '../../types/interfaces';
import ProfileCard from '../ProfileCard/ProfileCard';

type Props = {
  repos: RepoDetails[];
  // isLoading: boolean;
  hasError: string | null;
};

const AllRepos: React.FC<Props> = ({ repos, hasError }) => {
  return (
    <div>
      {hasError && <p className="error">{hasError}</p>}
      <h3 className={styles.title}>Top Repositories</h3>
      {repos.length > 0 && (
        <div className={styles.reposList}>
          {repos.map(repo => (
            <ProfileCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRepos;
