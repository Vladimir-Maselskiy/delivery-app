import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px 30px 17px;
  border: 3px solid var(--accent-color);
  border-radius: 30px;
  min-width: 250px;
  width: 250px;
`;
export const Title = styled.p`
  padding: 10px 20px;
  border-radius: 30px;
  min-width: 250px;
  width: 250px;
  text-align: center;
  color: #ffffff;
  background-color: var(--accent-color);
  font-size: 24px;
  font-weight: 600;
`;
