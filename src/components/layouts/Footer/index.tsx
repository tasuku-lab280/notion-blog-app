import Link from 'next/link';
import { ROUTE_NAME } from 'constants/navigation';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={styles.container}>
    <ul className={styles.lists}>
      <Link href={ROUTE_NAME.Home}>
        <li className={styles.list}>HOME</li>
      </Link>
      <li className={styles.after}>|</li>
      <Link href={ROUTE_NAME.Home}>
        <li className={styles.list}>プライバシーポリシー</li>
      </Link>
      <li className={styles.after}>|</li>
      <Link href={ROUTE_NAME.Home}>
        <li className={styles.list}>免責事項</li>
      </Link>
    </ul>

    {/* copyright */}
    <p className={styles.copy}>
      © &nbsp;<span>2021 tasuku-lab280</span>
    </p>
  </div>
);
