import { BaseBlogLayout } from 'components/layouts/BaseBlogLayout';
import styles from './styles.module.scss';

// type
type Props = {
  blogItem: BlogItemType;
  highlightedBody: string;
  tableOfContents: TableOfContentType[];
};

export const HomeTemplate = (props: Props) => {
  const { blogItem, highlightedBody, tableOfContents } = props;

  return (
    <>
      <BaseBlogLayout breadName={blogItem.title}>
        <section className={styles.container}>
          <main className={styles.main}>
            <div className={styles.rightBar}>
              {/* ブログタイトルエリア */}
              <TitleArea blogItem={blogItem} />

              {/* 目次 */}
              <TableOfContents tableOfContents={tableOfContents} />

              {/* 記事本文 */}
              <HighlightBody highlightedBody={highlightedBody} />
            </div>
          </main>
        </section>
      </BaseBlogLayout>
    </>
  );
};
