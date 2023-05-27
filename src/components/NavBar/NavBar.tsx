import React from 'react';
import { Box } from '../Box/Box';
import { HomeFilled } from '@ant-design/icons';
import { StyledLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="35px"
      justifyContent="space-around"
      backgroundColor="var(--accent-color)"
      //   padding="0px 20px"
      borderRadius={15}
    >
      <StyledLink href="/">
        <HomeFilled />
      </StyledLink>
      <StyledLink href="/cart">CART</StyledLink>
      <StyledLink href="/orders">HISTORY</StyledLink>
    </Box>
  );
};
