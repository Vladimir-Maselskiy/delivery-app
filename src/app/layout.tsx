'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import { Box } from '@/components/Box/Box';
import { Logo } from '@/components/Logo/Logo';
import { Layout, Spin } from 'antd';
import { fetchProducts } from '../utils/api';
import {
  CartWrapper,
  ProductsWrapper,
  useProductsContext,
} from '@/context/state';
import { NavCart } from '@/components/NavCart/NavCart';
import { NavBar } from '@/components/NavBar/NavBar';
import { Header } from '@/components/Header/Header';
import { IProduct } from '@/interfaces/interfaces';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { setProducts } = useProductsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(res => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <html lang="en">
      <body>
        <CartWrapper>
          <ProductsWrapper>
            {isLoading ? (
              <Box
                minWidth="100vw"
                minHeight="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Spin />
              </Box>
            ) : (
              <>
                <Layout style={{ minWidth: 290, width: '100%' }}>
                  <Header products={products} />
                  {children}
                </Layout>
              </>
            )}
          </ProductsWrapper>
        </CartWrapper>
      </body>
    </html>
  );
}
