import React from 'react';
import { Box } from '../Box/Box';
import { HomeFilled } from '@ant-design/icons';
import { StyledLink } from './NavBar.styled';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathName = usePathname();
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="35px"
      justifyContent="space-around"
      backgroundColor="var(--accent-color)"
      borderRadius={15}
    >
      <StyledLink
        href="/"
        activelink={pathName?.endsWith('/') ? 'activ' : undefined}
      >
        <HomeFilled />
      </StyledLink>
      <StyledLink
        href="/cart"
        activelink={pathName?.endsWith('/cart') ? 'activ' : undefined}
      >
        CART
      </StyledLink>
      <StyledLink
        href="/orders"
        activelink={pathName?.endsWith('/orders') ? 'activ' : undefined}
      >
        HISTORY
      </StyledLink>
    </Box>
  );
};
