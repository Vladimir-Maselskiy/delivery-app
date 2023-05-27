import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-weight: 700;
  transition: hover 2s;
  border-radius: 15px;
  min-height: 35px;
  &:hover {
    background-color: black;
    color: var(--white-color);
  }
`;
