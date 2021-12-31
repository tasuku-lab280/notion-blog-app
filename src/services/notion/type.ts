import type {
  QueryDatabaseResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints.d';

// Type
export type NotionProperties = QueryDatabaseResponse['results'][number]['properties'];
export type blockWithChildren = ListBlockChildrenResponse['results'][number] & {
  children?: blockWithChildren[];
};
