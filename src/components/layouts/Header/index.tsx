import Link from 'next/link';
import { ROUTE_NAME } from 'constants/navigation';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.main}>
        <Link href={ROUTE_NAME.Home}>
          <div className={styles.title}>
            <h1>NotionBlog</h1>
            <p>notionapi</p>
          </div>
        </Link>
        {/* リンク */}
        <div className={styles.link}>
          <Link href={ROUTE_NAME.Home}>
            <h2 data-test-id="home-header-link">ホーム</h2>
          </Link>
          <Link href={ROUTE_NAME.Home}>
            <h2 data-test-id="about-header-link">このブログについて</h2>
          </Link>
          <Link href={ROUTE_NAME.Home}>
            <h2 data-test-id="profile-header-link">プロフィール</h2>
          </Link>
        </div>
        {/* SP アイコン */}
        <div className={styles.sp}>
          {/* 検索 */}
          {/* {isNotSearchPageLogic(router.pathname) && (
            <div className={styles.sp__search} onClick={handleOpenSearchModal}>
              <SearchIcon />
            </div>
          )} */}

          {/* ハンバーガー */}
          {/* <div className={styles.sp__menu} onClick={handleOpenMenuModal}>
            <MenuIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};
