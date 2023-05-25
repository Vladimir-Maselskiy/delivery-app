import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 17px;
  border: 3px solid var(--accent-color);
  border-radius: 30px;
  min-width: 250px;
  width: 250px;
`;

export const StyledGroupName = styled.p`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 8px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 15px;
  line-height: 1.33;
`;
