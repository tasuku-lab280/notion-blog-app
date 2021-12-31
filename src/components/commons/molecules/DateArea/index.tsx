// Import
import { useDate } from 'hooks/useDate';
import styles from './styles.module.scss';

// Type
type Props = {
  date: string;
};

export const DateArea = ({ date }: Props) => {
  const [{ showYearMonthDate }] = useDate({ date });

  return (
    <div className={styles.container}>
      {/* <div className={styles.icon}>
        <ClockIcon size={size} />
      </div> */}

      <p className={styles.date}>{showYearMonthDate}</p>
    </div>
  );
};
