'use client';
import { useState, useEffect } from 'react';
import { Box } from '@/components/Box/Box';
import { ProductList } from '@/components/ProductList/ProductList';
import { ShopList } from '@/components/ShopList/ShopList';
import { IProduct, TShop } from '@/interfaces/interfaces';
import { Divider } from '@/components/Divider/Divider';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<TShop | null>(null);

  // useEffect(() => {
  //   const data = localStorage.getItem('products');
  //   if (data) setProducts(JSON.parse(data));
  // }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => {
        if (filter === null) return product;
        return product.shop === filter;
      })
    );
  }, [filter, products]);

  return (
    <main>
      <Box display="flex" padding="120px 40px 20px">
        <Box width={250} minWidth={250}>
          <ShopList setFilter={setFilter} />
        </Box>
        <Divider />
        <Box marginLeft={25}>
          <ProductList products={filteredProducts} />
        </Box>
      </Box>
    </main>
  );
}
