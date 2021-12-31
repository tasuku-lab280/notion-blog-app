// Import
import { Client } from '@notionhq/client';

// Const
export const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || '';
