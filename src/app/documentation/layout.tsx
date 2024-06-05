interface PostingsLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Documentation - Minescale",
};

export default async function PostingsLayout({
  children,
}: PostingsLayoutProps) {
  return <>{children}</>;
}
