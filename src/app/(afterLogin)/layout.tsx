import styles from '@/app/(afterLogin)/layout.module.css';

interface IAfterLoginLayoutProps {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: IAfterLoginLayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}></header>
      <div className={styles.rightSectionWrapper}></div>
      {children}
    </div>
  );
}
