import styles from '@/app/page.module.css';

interface ILayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: ILayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
