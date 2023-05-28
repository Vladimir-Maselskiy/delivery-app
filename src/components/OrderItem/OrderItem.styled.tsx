import styled from 'styled-components';

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 17px;
  border: 3px solid var(--accent-color);
  border-radius: 30px;
  min-width: 250px;
  width: 250px;
`;

export const StyledNameText = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin-left: 42px;
`;
export const StyledPrice = styled.p`
  font-size: 40px;
  margin-left: auto;
`;
export const StyledLabel = styled.label`
  white-space: nowrap;
  font-weight: 700;
  font-size: 32px;
`;
export const StyledButton = styled.button`
  color: #ffffff;
  padding: 11px 26px;
  background-color: var(--accent-color);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  border: none;
  border-radius: 16px;
  margin-left: 15px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const OrderItemWrapper = styled.div`
  display: flex;
  align-items: 'center';
  flex-grow: 1;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-grow: 1;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-left: 0;
      width: 100%;
    }
  }
`;
