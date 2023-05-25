'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import { Box } from '@/components/Box/Box';
import { Logo } from '@/components/Logo/Logo';
import { Layout, Button } from 'antd';
import { fetchProducts } from '../utils/api';
import { IProduct } from '@/interfaces/interfaces';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';

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
      localStorage.setItem('products', JSON.stringify(res));
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
            <Link href="/cart" style={{ marginLeft: 'auto' }}>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined style={{ fontSize: 30 }} />}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'var(--accent-color)',
                  borderRadius: '50%',
                }}
              />
            </Link>
          </Box>
          {/* <NavBar /> */}
        </Layout>
        {children}
      </body>
    </html>
  );
}
