interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }) {
  return <div>{children}</div>;
}
