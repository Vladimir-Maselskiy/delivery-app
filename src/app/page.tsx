'use client';
import { useState, useEffect } from 'react';
import { Box } from '@/components/Box/Box';
import { ProductList } from '@/components/ProductList/ProductList';
import { ShopList } from '@/components/ShopList/ShopList';
import { IProduct, TShop } from '@/interfaces/interfaces';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<TShop | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('products');
    if (data) setProducts(JSON.parse(data));
  }, []);

  useEffect(() => {
    setFilteredProducts(products.filter(product => product.shop === filter));
  }, [filter]);

  return (
    <main>
      <Box display="flex">
        <Box>
          <ShopList />
        </Box>
        <Box>
          <ProductList products={filteredProducts} />
        </Box>
      </Box>
    </main>
  );
}
