'use client';
import { Box } from '@/components/Box/Box';
import { Logo } from '@/components/Logo/Logo';
import { Layout } from 'antd';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minWidth: 290, width: '100%' }}>
          <Box
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="space-around"
            padding="0 20px"
            minHeight={80}
          >
            <Logo />
          </Box>
          {/* <NavBar /> */}
        </Layout>
        {children}
      </body>
    </html>
  );
}
