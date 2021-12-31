import { BaseLayout } from 'components/layouts/BaseLayout';
import { Aside } from 'components/layouts/Aside';
import styles from './styles.module.scss';

export type Props = {
  children: React.ReactNode;
  breadName?: string;
};

export const BaseBlogLayout = (props: Props) => {
  // const
  const { children, breadName } = props;

  return (
    <BaseLayout breadName={breadName}>
      <article className={styles.article}>{children}</article>
      <div className={styles.aside}>
        <Aside />
      </div>
    </BaseLayout>
  );
};
