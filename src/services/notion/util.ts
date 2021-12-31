import type { NotionProperties, blockWithChildren } from './type';

// ブログのタイトル取得
export const getBlogtitle = (property: NotionProperties) => {
  const title = property.title;
  if (title.type === 'title' && title.title[0]) {
    return title.title[0].plain_text;
  }
  return '';
};

// ブログのタグ一覧を取得
export const getBlogTags = (property: NotionProperties) => {
  const tag = property.tags;
  if (tag.type === 'multi_select') return tag.multi_select;
  return '';
};

// ブログの作成日時を取得
export const getBlogCreatedAt = (property: NotionProperties) => {
  const createdAt = property.createdAt;
  if (createdAt.type === 'date') return createdAt.date!.start;
  return '';
};

// ブログの目次を取得
export const getTableOfContents = (blocks: blockWithChildren[]) => {
  return blocks.filter((block) => block.type == 'heading_2' || block.type == 'heading_3');
};

// ブログの目次のテキストを取得
export const getTableOfContentText = (tableOfContent: blockWithChildren) => {
  switch (tableOfContent.type) {
    case 'heading_2':
      return tableOfContent.heading_2.text[0].plain_text;
    case 'heading_3':
      return tableOfContent.heading_3.text[0].plain_text;
    default:
      return null;
  }
};
