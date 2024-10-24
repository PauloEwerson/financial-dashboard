import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #e00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c00;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;