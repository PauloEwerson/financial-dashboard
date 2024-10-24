import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #cccccc;
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #333333;
`;

export const Amount = styled.p<{ color?: string }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ color }) => color || '#0070f3'};
`;