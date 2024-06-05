interface PostingsLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Get Started - Minescale",
};

export default async function PostingsLayout({
  children,
}: PostingsLayoutProps) {
  return <>{children}</>;
}
