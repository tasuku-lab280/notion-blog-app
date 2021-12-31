// Import
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import type { blockWithChildren } from './type';

type richText = {
  type: 'text';
  text: {
    content: string;
    link: {
      url: string;
    } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color:
      | 'default'
      | 'gray'
      | 'brown'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'purple'
      | 'pink'
      | 'red'
      | 'gray_background'
      | 'brown_background'
      | 'orange_background'
      | 'yellow_background'
      | 'green_background'
      | 'blue_background'
      | 'purple_background'
      | 'pink_background'
      | 'red_background';
  };
  plain_text: string;
  href: string | null;
};

export const renderBlock = (block: blockWithChildren) => {
  const { type, id } = block;

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <TextComponent richTexts={block.paragraph.text as richText[]} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <TextComponent richTexts={block.heading_1.text as richText[]} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <TextComponent richTexts={block.heading_2.text as richText[]} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <TextComponent richTexts={block.heading_3.text as richText[]} />
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <li>
          <TextComponent richTexts={block.bulleted_list_item.text as richText[]} />
        </li>
      );
    case 'code':
      return (
        <SyntaxHighlighter
          language={block.code.language}
          style={a11yDark}
          wrapLines={true}
          lineProps={{ style: { fontSize: 13 } }}>
          {block.code.text[0].plain_text}
        </SyntaxHighlighter>
      );
    case 'table_of_contents':
      return null;
    default:
      return `Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
};

/// Notionの1ブロックのテキストをReactのコンポーネント要素として返す
const TextComponent = ({ richTexts }: { richTexts: richText[] }) => {
  if (!richTexts) return null;

  const elements = richTexts.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span key={index} style={color !== 'default' ? { color } : {}}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });

  return <>{elements}</>;
};
