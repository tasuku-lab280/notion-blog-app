// Import
import { BaseBlogLayout } from 'components/layouts/BaseBlogLayout';
import { HighlightBody } from 'components/commons/molecules/HighlightBody';
import { TableOfContents } from 'components/commons/organisms/TableOfContents';
import { TitleArea } from './TitleArea';
import { getBlogtitle, getBlogTags, getBlogCreatedAt, getTableOfContents } from 'services/notion';
import type { NotionProperties, blockWithChildren } from 'services/notion';
import styles from './styles.module.scss';

// Props
type Props = {
  properties: NotionProperties;
  blocks: blockWithChildren[];
};

// Component
export const BlogItemTemplate = ({ properties, blocks }: Props) => {
  // Const
  const title = getBlogtitle(properties);
  const tags = getBlogTags(properties);
  const createdAt = getBlogCreatedAt(properties);
  const tableOfContents = getTableOfContents(blocks);

  // DOM
  return (
    <>
      <BaseBlogLayout breadName={title}>
        <section className={styles.container}>
          <main className={styles.main}>
            <div className={styles.rightBar}>
              {/* ブログタイトルエリア */}
              <TitleArea title={title} tags={tags} createdAt={createdAt} />

              {/* 目次 */}
              <TableOfContents tableOfContents={tableOfContents} />

              {/* 記事本文 */}
              <HighlightBody blocks={blocks} />

              {/* SNSシェアボタン 記事最下層 */}
              <div className={styles.shareArea}>
                {/* <SnsShareArea title={blogItem.title} shareUrl={shareUrl} /> */}
              </div>
            </div>
          </main>
        </section>
      </BaseBlogLayout>
    </>
  );
};
