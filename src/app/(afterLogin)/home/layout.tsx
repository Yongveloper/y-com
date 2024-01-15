interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: IHomeLayoutProps) {
  return <div>홈레이아웃{children}</div>;
}
