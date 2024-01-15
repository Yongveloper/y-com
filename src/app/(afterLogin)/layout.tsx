interface IAfterLoginLayoutProps {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: IAfterLoginLayoutProps) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}
