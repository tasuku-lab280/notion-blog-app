import Image from 'next/image';
import { BasicAsidePartsArea } from 'components/layouts/Aside/BasicAsidePartsArea';
import { TwitterIcon } from 'components/common/icons/TwitterIcon';
import { GithubIcon } from 'components/common/icons/GithubIcon';
import { FaceBookIcon } from 'components/common/icons/FaceBookIcon';
import { useProfileState } from 'contexts/ProfileContext';
import { useProfilePageTransition } from 'hooks/useProfilePageTransition';
import styles from './styles.module.scss';

export const Profile = () => {
  const { profile } = useProfileState();
  const [{ onClickTransitionProfilePage }] = useProfilePageTransition();

  return (
    <BasicAsidePartsArea title="プロフィール">
      {profile.id !== '' && (
        <div className={styles.container}>
          {/* アバター */}
          <div className={styles.image}>
            <Image
              className={styles.image__pic}
              src={profile.userImage.url}
              alt="Picture"
              width={profile.userImage.width}
              height={profile.userImage.height}
            />
          </div>
          <hr className={styles.border} />

          {/* プロフィール */}
          <div className={styles.profile}>
            <p className={styles.profile__name}>{profile.name}</p>
            <p className={styles.profile__eng_name}>{profile.englishName}</p>
            <p className={styles.profile__position}>{profile.position}</p>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a target="_blank" href={profile.twitter} rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a target="_blank" href={profile.github} rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a target="_blank" href={profile.facebook} rel="noopener noreferrer">
                <FaceBookIcon />
              </a>
            </li>
          </ul>

          {/* ボタン */}
          <button
            data-test-id="test-more-responsive"
            className={styles.button}
            onClick={(e) => onClickTransitionProfilePage(e)}>
            more
          </button>
        </div>
      )}
    </BasicAsidePartsArea>
  );
};
