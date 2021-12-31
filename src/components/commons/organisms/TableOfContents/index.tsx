// Import
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './styles.module.scss';
import { getTableOfContentText } from 'services/notion';
import type { blockWithChildren } from 'services/notion';

// Type
type Props = {
  tableOfContents: blockWithChildren[];
};

// Component
export const TableOfContents = ({ tableOfContents }: Props) => {
  // Function
  const getListStyle = (tableOfContent: blockWithChildren) => {
    if (tableOfContent.type === 'heading_2') {
      return styles.list__h1;
    } else {
      return styles.list__h2;
    }
  };

  // DOM
  if (tableOfContents.length === 0) return null;

  return (
    <>
      <div className={styles.container} id="create-table-of-contents">
        <h4>目次</h4>
        <ul className={styles.lists} id="lists">
          {tableOfContents.map((tableOfContent) => (
            <li
              className={getListStyle(tableOfContent)}
              id={'list ' + tableOfContent.id}
              key={tableOfContent.id}>
              <AnchorLink offset="140" href={'#' + tableOfContent.id}>
                {getTableOfContentText(tableOfContent)}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
