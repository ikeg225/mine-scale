interface PostingsLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Privacy Policy - Minescale",
};

export default async function PostingsLayout({
  children,
}: PostingsLayoutProps) {
  return <>{children}</>;
}
