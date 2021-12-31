import type { NotionProperties } from './type';

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
