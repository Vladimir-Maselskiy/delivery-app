'use client';
import { useState, useEffect } from 'react';
import { Box } from '@/components/Box/Box';
import { ProductList } from '@/components/ProductList/ProductList';
import { ShopList } from '@/components/ShopList/ShopList';
import { IProduct, TShop } from '@/interfaces/interfaces';
import { Divider } from 'antd';
import { width } from 'styled-system';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<TShop | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('products');
    if (data) setProducts(JSON.parse(data));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => {
        if (filter === null) return product;
        product.shop === filter;
      })
    );
  }, [filter, products]);

  return (
    <main>
      <Box display="flex" padding={40}>
        <Box width="25%" minWidth="25%">
          <ShopList />
        </Box>
        <Box width={10} minWidth={10} backgroundColor="var(--accent-color)">
          <></>
        </Box>
        <Box>
          <ProductList products={filteredProducts} />
        </Box>
      </Box>
    </main>
  );
}
