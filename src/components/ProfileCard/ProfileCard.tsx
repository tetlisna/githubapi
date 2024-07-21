import styles from './ProfileCard.module.scss';
import { RepoDetails } from '../../types/interfaces';

type Props = {
  repo: RepoDetails;
};

const ProfileCard: React.FC<Props> = ({ repo }) => {
  const { owner } = repo;
  console.log({ owner }, 'repo');
  return (
    <>
      <div className={styles.profileCard}>
        <div className={styles.profileCard__name}>
          <div className={styles.avatarName}>
            <img
              src={owner.avatar_url}
              alt={owner.login}
              className={styles.profileCard__avatar}
            />
            <div className={styles.avatarName__info}>
              <strong className={styles.avatarName__title}>
                <a
                  href={owner.login}
                  target="_blank"
                  className={styles.profileCard__link}
                >
                  {owner.login}
                </a>
              </strong>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileCard__link}
            >
              {repo.name}
            </a>
          </div>
        </div>
        <div className={styles.profileCard__descr}>{repo.description}</div>
      </div>
    </>
  );
};

export default ProfileCard;
