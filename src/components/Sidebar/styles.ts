import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;