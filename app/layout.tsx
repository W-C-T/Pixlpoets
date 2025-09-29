import './globals.css';

export const metadata = {
  title: '我的社交网站',
  description: '个人迷你社交网络',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
