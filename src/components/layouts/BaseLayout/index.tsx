import { Header } from 'components/layouts/Header';
import { Breadcrumbs } from 'components/layouts/Breadcrumbs';
import { Footer } from 'components/layouts/Footer';
import styles from './styles.module.scss';

// type
export type Props = {
  children: React.ReactNode;
  breadName?: string;
};

export const BaseLayout = (props: Props) => {
  // const
  const { children, breadName } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
          <div className={styles.headerEmpty} />
        </div>
        {!!breadName && <Breadcrumbs breadName={breadName} />}

        <div className={styles.divider}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
        {/* スクロールトップボタン */}
        {/* <div className={styles.fixButton} onClick={scrollToTop}>
          <ArrowIcon size={70} color="#c8c8c8" />
        </div> */}
        {/* スクロールトップボタン SP */}
        {/* <div className={styles.fixButton__sp} onClick={scrollToTop}>
          <ArrowIcon size={44} color="#c8c8c8" />
        </div> */}
        {/* 検索モーダル */}
        {/* <SearchModal
          searchText={searchText}
          isSearchModalVisible={isSearchModalVisible}
          handleCloseSearchModal={handleCloseSearchModal}
          onChangeSearchText={onChangeSearchText}
          onKeyUpSearch={onKeyUpSearchBlogModal}
        /> */}
        {/* メニューモーダル */}
        {/* <MenuModal
          isMenuModalVisible={isMenuModalVisible}
          handleCloseMenuModal={handleCloseMenuModal}
          handleHomeLink={handleHomeLink}
          handleAboutLink={handleAboutLink}
          handleProfileLink={handleProfileLink}
        /> */}
      </div>
    </>
  );
};
