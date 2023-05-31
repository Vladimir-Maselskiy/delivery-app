import Link from 'next/link';
import styled from 'styled-components';

type TProps = {
  activelink: string | undefined;
};

export const StyledLink = styled(Link)<TProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${p => (p.activelink ? '#000' : 'var(--accent-color)')};
  color: var(--white-color);
  font-weight: 700;
  transition: hover 2s;
  border-radius: 15px;
  min-height: 35px;

  &:hover {
    color: ${p => (p.activelink ? 'var(--white-color)' : '#000')};
  }
`;
