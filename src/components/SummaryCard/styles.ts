import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #cccccc;
  flex: 1 1 200px;
  min-width: 200px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Amount = styled.p<{ color?: string }>`
  font-size: 1.5rem;
  color: ${({ color }) => color || '#000'};
  font-weight: bold;
`;