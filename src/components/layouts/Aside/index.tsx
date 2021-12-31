import styles from './styles.module.scss';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* 検索フォーム */}
      {/* <div className={styles.search}>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div> */}

      {/* プロフィールエリア */}
      {/* <div className={styles.profile}>
        <ProfileArea />
      </div> */}

      {/* プロフィールエリア レスポンシブ */}
      {/* <div className={styles.profile__responsive}>
        <ProfileAreaResponsive />
      </div> */}

      {/* 検索フォーム レスポンシブ */}
      {/* <div className={styles.search__responsive}>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          size={32}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div> */}

      {/* 検索フォーム レスポンシブ */}
      {/* <div className={styles.search__sp}>
        <SearchInputForm
          text={searchText}
          placeholder="検索"
          size={20}
          onChange={onChangeSearchText}
          onKeyUp={onKeyUpSearchBlog}
        />
      </div> */}

      {/* カテゴリーエリア */}
      {/* <div className={styles.parts}>
        <CategoryArea />
      </div> */}
      {/* アーカイブエリア */}
      {/* <div className={styles.parts}>
        <ArchiveArea />
      </div> */}
    </aside>
  );
};
