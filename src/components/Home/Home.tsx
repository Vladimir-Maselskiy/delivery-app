'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import { ShopList } from '../ShopList/ShopList';
import { Divider } from '../Divider/Divider';
import { ProductList } from '../ProductList/ProductList';
import { IProduct, TShop } from '@/interfaces/interfaces';
import { Wrapper } from './Home.styled';
import { useProductsContext } from '@/context/state';

export const Home = () => {
  const { products } = useProductsContext();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<TShop | null>(null);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => {
        if (filter === null) return product;
        return product.shop === filter;
      })
    );
  }, [filter, products]);
  return (
    <Wrapper>
      <Box width={250} minWidth={250}>
        <ShopList setFilter={setFilter} />
      </Box>
      <Divider />
      <Box marginLeft={25}>
        <ProductList products={filteredProducts} />
      </Box>
    </Wrapper>
  );
};
