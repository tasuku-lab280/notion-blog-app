// Import
import styles from './styles.module.scss';

// Props
type Props = {
  title: string;
  tags: any;
  createdAt: string;
};

// Component
export const TitleArea = ({ title, tags, createdAt }: Props) => {
  // DOM
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.category}>
        {tags.length > 0 &&
          tags.map((tag: any) => (
            <div key={tag.id}>
              <div className={styles.category__item}>{tag.name}</div>
            </div>
          ))}
      </div>
      <div className={styles.date}>{createdAt}</div>
    </div>
  );
};
