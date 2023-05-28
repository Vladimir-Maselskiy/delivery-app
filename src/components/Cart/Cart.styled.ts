import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 120px 40px 20px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
