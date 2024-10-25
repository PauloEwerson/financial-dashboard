import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  margin-left: 200px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;
