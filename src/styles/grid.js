import styled from 'styled-components';
export const StyledContainer = styled.div `
  width: 100%;
  max-width: ${({ containerWidth }) => containerWidth ? containerWidth : 1000}px;
  margin: 0 auto;
  padding: 10px;
`;
export const StyledGridBox = styled.div `
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray0};
  border-radius: 5px;
`;
