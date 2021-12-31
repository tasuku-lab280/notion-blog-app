// Import
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BlogItemTemplate } from 'components/pages/BlogItemTemplate';
import { fetchBlogTitles, fetchBlogInfo } from 'services/notion';
import type { NotionProperties, blockWithChildren } from 'services/notion';

// Props
type Props = {
  properties: NotionProperties;
  blocks: blockWithChildren[];
};

// Component
const BlogItem = ({ properties, blocks }: Props) => {
  // DOM
  return <BlogItemTemplate properties={properties} blocks={blocks} />;
};

// SSG
export const getStaticPaths = async () => {
  const titles = await fetchBlogTitles();

  const paths = titles.map((title: string) => {
    return { params: { title } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  interface Params extends ParsedUrlQuery {
    title: string;
  }

  const { title } = context.params as Params;
  const { properties, blocks } = await fetchBlogInfo(title);

  return {
    props: {
      properties,
      blocks,
    },
    revalidate: 1,
  };
};

// Export Default
export default BlogItem;
