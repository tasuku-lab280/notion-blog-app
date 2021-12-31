import { isNotionClientError } from '@notionhq/client';
import { notionClient, databaseId } from './client';
import { getBlogtitle } from './util';

// Function
// ブログのデータベースを取得
export const fetchDatabase = async () => {
  try {
    const res = await notionClient.databases.query({
      database_id: databaseId,
    });
    return res.results;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      alert(error.message);
    }
    return [];
  }
};

// ブログのタイトル一覧を取得
export const fetchBlogTitles = async () => {
  const blogs = await fetchDatabase();
  return blogs.map((blog) => getBlogtitle(blog.properties));
};

// ブログの詳細情報を取得
export const fetchBlogInfo = async (title: string) => {
  const blogs = await fetchDatabase();
  const blog = blogs.find((blog) => getBlogtitle(blog.properties) === title);
  const properties = blog!.properties;
  const _blocks = await fetchBlogBlocks(blog!.id);
  const blocks = _blocks.results;
  return { properties, blocks };
};

// ブログのブロックを取得
const fetchBlogBlocks = (id: string) => {
  return notionClient.blocks.children.list({ block_id: id });
};
