'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import { Box } from '@/components/Box/Box';
import { Logo } from '@/components/Logo/Logo';
import { Layout } from 'antd';
import { fetchProducts } from '../utils/api';
import { ICartItem, IProduct } from '@/interfaces/interfaces';
import { CardWrapper } from '@/context/state';
import { NavCart } from '@/components/NavCart/NavCart';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [order, setOrder] = useState<IOrderItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<ICartItem[]>(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  useEffect(() => {
    fetchProducts().then(res => {
      localStorage.setItem('products', JSON.stringify(res));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <html lang="en">
      <body>
        <CardWrapper>
          <>
            <Layout style={{ minWidth: 290, width: '100%' }}>
              <Box
                position="fixed"
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                padding="20px 40px"
                minHeight={80}
                zIndex={2}
                width="100vw"
                backgroundColor="#ececec"
              >
                <Logo />
                <NavCart />
              </Box>
              {/* <NavBar /> */}
            </Layout>
            {children}
          </>
        </CardWrapper>
      </body>
    </html>
  );
}
