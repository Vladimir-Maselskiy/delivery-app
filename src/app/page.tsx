'use client';

import { Box } from '@/components/Box/Box';
import { ProductList } from '@/components/ProductList/ProductList';
import { ShopList } from '@/components/ShopList/ShopList';

export default function Home() {
  return (
    <main>
      <Box display="flex">
        <Box>
          <ShopList />
        </Box>
        <Box>
          <ProductList />
        </Box>
      </Box>
    </main>
  );
}
