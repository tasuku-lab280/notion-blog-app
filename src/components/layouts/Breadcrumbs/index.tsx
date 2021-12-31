import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  breadName: string;
};

export const Breadcrumbs = (props: Props) => {
  // const
  const { breadName } = props;

  return (
    <div className={styles.bread}>
      <ul className={styles.bread__list}>
        <li className={styles.bread__item}>
          <Link href="/">
            <span className={styles.bread__link}>ホーム</span>
          </Link>
        </li>
        <li className={styles.breadName}>{breadName}</li>
      </ul>
    </div>
  );
};
