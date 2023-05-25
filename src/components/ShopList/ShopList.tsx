import React from 'react';
import { Box } from '../Box/Box';
import { StyledList } from './ShopList.styled';

export const ShopList = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gridGap={25}>
      <p>ShopList</p>
      <StyledList>
        <li>All Shops</li>
        <li>Mc Donn</li>
        <li>CFK</li>
        <li>Pussy House</li>
        <li>Smachno</li>
      </StyledList>
    </Box>
  );
};
