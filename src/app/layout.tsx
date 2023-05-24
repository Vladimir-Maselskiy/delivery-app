'use client';
import { useEffect, useState } from 'react';
import { Box } from '@/components/Box/Box';
import { Logo } from '@/components/Logo/Logo';
import { Layout } from 'antd';
import { fetchProducts } from '../utils/api';
import { IProduct } from '@/interfaces/interfaces';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [order, setOrder] = useState<IOrderItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res);
      setIsLoading(false);
    });
  }, []);
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
