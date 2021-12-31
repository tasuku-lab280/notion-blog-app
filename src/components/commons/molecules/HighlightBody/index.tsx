// Import
import styles from './styles.module.scss';
import { renderBlock } from 'services/notion';
import type { blockWithChildren } from 'services/notion';

// Type
type Props = {
  blocks: blockWithChildren[];
};

// Component
export const HighlightBody = ({ blocks }: Props) => {
  // DOM
  return <div className={styles.contents}>{blocks.map((block) => renderBlock(block))}</div>;
};
