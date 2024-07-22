import styles from './ProfileCard.module.scss';
import { RepoDetails } from '../../types/interfaces';

type Props = {
  repo: RepoDetails;
};

const ProfileCard: React.FC<Props> = ({ repo }) => {
  const { owner } = repo;
  return (
    <>
      <div className={styles.profileCard}>
        <div className={styles.profileCard__owner}>
          <div className={styles.avatarName}>
            <img
              src={owner.avatar_url}
              alt={owner.login}
              className={styles.profileCard__avatar}
            />
            <a
              href={owner.html_url}
              target="_blank"
              className={styles.profileCard__link}
            >
              {owner.login}
            </a>
          </div>
        </div>

        <div className={styles.profileCard__repo}>
          <div className={styles.avatarName__info}>
            <strong className={styles.avatarName__title}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileCard__link}
              >
                {repo.name}
              </a>
            </strong>

            <div className={styles.profileCard__star}>
              <p>✩{repo.stargazers_count}</p>
            </div>
          </div>
          {repo.description}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
