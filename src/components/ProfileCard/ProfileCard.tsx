// import { useState } from 'react';
// import styles from './ProfileCard.module.scss';
// import { Owner } from '../../types/interfaces';

// type Props = {
//   repo: Owner | null;
// };

// const ProfileCard: React.FC<Props> = ({ repo }) => {
//   const [repo, setRepoDetails] = useState<Owner | null>(null);

//   // const getrepoDetails = async (): Promise<repoDetails | undefined> => {
//   //   try {
//   //     const response = await fetch(`https://api.github.com/repos/${repo.login}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //     if (!response.ok) {
//   //       throw new Error(`Error: ${response.stwneratusText}`);
//   //     }
//   //     const repoData: repoDetails = await response.json();

//   //     setrepoDetails(repoData);

//   //     return repoData;
//   //   } catch (error) {
//   //     setHasError((error as TypeError).message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getrepoDetails();
//   // }, []);

//   return (
//     <>
//       <div className={styles.profileCard}>
//         <div className={styles.profileCard__name}>
//           <div className={styles.avatarName}>
//             <img
//               src={repo.avatar_url}
//               alt={repo.login}
//               className={styles.profileCard__avatar}
//             />
//             <div className={styles.avatarName__info}>
//               <strong className={styles.avatarName__title}>
//                 {repo.login}
//               </strong>
//               <span className={styles.avatarName__subtitle}>
//                 {repo.html_url}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className={styles.profileCard__descr}>
//           <a href={repo.html_url}>profile</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileCard;
